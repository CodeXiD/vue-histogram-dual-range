<template>
  <div
    class="histogram"
    :style="{
      '--sliderSize': sliderSize
    }"
  >
    <div
      ref="histogramRef"
      :style="{ height: `${histogramHeight}px` }"
      class="histogram-columns"
    >
      <div
        v-for="(column, idx) in columns"
        :key="idx"
        class="histogram-column-wrapper"
        :style="{
          left: `${column.x}px`,
          width: rectWidth+'px',
          height: `${column.heightPercentage}%`,
        }"
      >
        <Tooltip
          class="histogram-column-tooltip"
          popper-class="histogram-column-tooltip-popper"
          :disabled="!slots.columnTooltip"
        >
          <div
            class="histogram-column"
            :style="{
              background: histogramColumnColor
            }"
          />

          <template
            v-if="slots.columnTooltip"
            #popper
          >
            <slot
              name="columnTooltip"
              :column="column"
            />
          </template>
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, defineProps, onUnmounted, PropType, ref, toRefs, useSlots} from "vue";
import {HistogramData} from "../types";
import { Tooltip } from 'floating-vue'
import 'floating-vue/dist/style.css'
import {
  get, set,
  useIntersectionObserver,
  useResizeObserver,
  useToNumber,
  watchTriggerable
} from "@vueuse/core";
import computeColumnsAverages, {ColumnAverage} from "../helpers/computeColumnsAverage.ts";

const slots = useSlots();

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
  histogramColumnAverages: {
    type: Array as PropType<Array<number | ColumnAverage>>,
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
  histogramNoZeroColumnMinHeightPercent: {
    type: Number,
    required: true
  },
  sliderSize: {
    type: Number,
    required: true,
  },
});

const { histogramData, min, max, histogramColumnCount, histogramColumnOffset, histogramColumnAverages, histogramNoZeroColumnMinHeightPercent } = toRefs(props);

const histogramRef = ref<SVGGraphicsElement>();
const histogramWidth = ref(0);

const histogramWatcher = watchTriggerable(
    histogramRef,
    () => {
      set(histogramWidth, get(histogramRef)?.clientWidth)
    },
)


const rectWidth = computed(() => {
  const svgWidth = get(histogramWidth);
  if(!svgWidth) return 0;
  return get(useToNumber((((svgWidth / get(histogramColumnCount)) - get(histogramColumnOffset)).toFixed(2))));
})

const histogramResizeObserver = useResizeObserver(histogramRef, () => {
  histogramWatcher.trigger();
})

const histogramIntersectionObserver = useIntersectionObserver(
    histogramRef,
    ([{ isIntersecting }]) => {
      if(isIntersecting) {
        histogramWatcher.trigger();
      }
    },
)

onUnmounted(() => {
  histogramResizeObserver.stop();
  histogramIntersectionObserver.stop();
})

const histogramDataMap = computed(() => {
  let reactsMap = new Map();
  get(histogramData).forEach((histogramItem) => {
    reactsMap.set(histogramItem.value, histogramItem.count)
  })
  return reactsMap;
})

const columns = computed(() => {
  const step = Math.ceil(get(max) / get(histogramColumnCount));

  const columnsAverages = get(histogramColumnAverages) ? get(histogramColumnAverages) : computeColumnsAverages({
    histogramDataMap: get(histogramDataMap),
    step,
    min: get(min),
    max: get(max)
  })



  const maxAverage = Math.max.apply(Math, columnsAverages.map(c => typeof c === 'number' ? c : c.avg));

  return columnsAverages.map((column, idx) => {
    // высчитываем среднее значение сколько это процентов от макс среднего значения
    const columnHeightPercentage = ((typeof column === 'number' ? column : column.avg) / maxAverage) * 100

    const safeColumnHeightPercentage = (columnHeightPercentage > 0)
        ? Math.max(columnHeightPercentage, get(histogramNoZeroColumnMinHeightPercent))
        : 0

    let x = 0;

    if(idx > 0) {
      x = (get(rectWidth) * idx + (idx * get(histogramColumnOffset)));
    }

    return {
      heightPercentage: safeColumnHeightPercentage,
      x,
      data: column
    }
  })
})
</script>

<style lang="scss" scoped>
.histogram {
  .histogram-columns {
    position: relative;
    width: inherit;
    margin: 0 24px;

    .histogram-column-wrapper {
      position: absolute;
      bottom: 0;

      .histogram-column {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

<style>
.histogram-column-tooltip {
  width: 100%;
  height: 100%;
}
</style>
