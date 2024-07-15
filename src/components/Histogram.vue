<template>
  <div
    class="histogram"
    :style="{
      '--sliderSize': sliderSize
    }"
  >
    <svg
      ref="svgHistogramRef"
      :style="{ height: `${histogramHeight}px` }"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        v-for="(rect, idx) in rects"
        :key="idx"
        :x="rect.x"
        y="0"
        :width="rectWidth"
        :height="`${rect.heightPercentage}%`"
        :fill="histogramColumnColor"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import {computed, defineProps, onUnmounted, PropType, ref, toRefs} from "vue";
import {HistogramData} from "../types";
import {
  get, set,
  useIntersectionObserver,
  useResizeObserver,
  useToNumber,
  watchTriggerable
} from "@vueuse/core";
import computeColumnsAverages from "../helpers/computeColumnsAverage.ts";

const props = defineProps({
  histogramData: {
    type: Array as PropType<HistogramData>,
    default: () => [0, 100]
  },
  histogramHeight: {
    type: Number,
    default: 83
  },
  histogramColumnCount: {
    type: Number,
    required: true
  },
  min: {
    type: Number,
    required: true
  },
  max: {
    type: Number,
    required: true
  },
  histogramColumnColor: {
    type: String,
    required: true
  },
  histogramColumnOffset: {
    type: Number,
    required: true
  },
  sliderSize: {
    type: Number,
    required: true,
  },
});

const { histogramData, min, max, histogramColumnCount, histogramColumnOffset } = toRefs(props);

const svgHistogramRef = ref<SVGGraphicsElement>();
const svgHistogramWidth = ref(0);

const svgHistogramWatcher = watchTriggerable(
    svgHistogramRef,
    () => {
      set(svgHistogramWidth, get(svgHistogramRef)?.clientWidth)
    },
)


const rectWidth = computed(() => {
  const svgWidth = get(svgHistogramWidth);
  if(!svgWidth) return 0;
  return get(useToNumber((((svgWidth / get(histogramColumnCount)) - get(histogramColumnOffset)).toFixed(2))));
})

const svgResizeObserver = useResizeObserver(svgHistogramRef, () => {
  svgHistogramWatcher.trigger();
})

const svgIntersectionObserver = useIntersectionObserver(
    svgHistogramRef,
    ([{ isIntersecting }]) => {
      if(isIntersecting) {
        svgHistogramWatcher.trigger();
      }
    },
)

onUnmounted(() => {
  svgResizeObserver.stop();
  svgIntersectionObserver.stop();
})

const histogramDataMap = computed(() => {
  let reactsMap = new Map();
  get(histogramData).forEach((histogramItem) => {
    reactsMap.set(histogramItem.value, histogramItem.count)
  })
  return reactsMap;
})

const rects = computed(() => {
  const step = Math.ceil(get(max) / get(histogramColumnCount));

  const columnsAverages = computeColumnsAverages({
    histogramDataMap: get(histogramDataMap),
    step,
    min: get(min),
    max: get(max)
  })

  const maxAverage = Math.max.apply(Math, columnsAverages);
  // высчитываем из каждого среднего значения сколько это процентов от макс среднего значения
  const rectHeightPercentages = columnsAverages.map((columnAverage) => (columnAverage / maxAverage) * 100);

  return rectHeightPercentages.map((rectHeightPercentage, idx) => {
    let x = 0;

    if(idx > 0) {
      x = (get(rectWidth) * idx + (idx * get(histogramColumnOffset)));
    }
    return {
      heightPercentage: rectHeightPercentage,
      x,
    }
  })
})
</script>

<style lang="scss" scoped>
.histogram {
  svg {
    width: calc(100% - var(--sliderSize) * 1px);
    margin: 0 24px;
    transform: scaleY(-1);
  }
}
</style>
