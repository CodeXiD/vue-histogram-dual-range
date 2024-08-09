<template>
  <div class="histogram-range-container">
    <Histogram
      :histogram-data="histogramData"
      :histogram-height="histogramHeight"
      :histogram-column-count="possibleHistogramColumnCount"
      :histogram-column-averages="histogramColumnAverages"
      :max="max"
      :min="min"
      :histogram-column-color="histogramColumnColor"
      :histogram-column-offset="histogramColumnOffset"
      :slider-size="sliderSize"
      :histogram-no-zero-column-min-height-percent="histogramNoZeroColumnMinHeightPercent"
    >
      <template
        v-if="slots.columnTooltip"
        #columnTooltip="slotProps"
      >
        <slot
          name="columnTooltip"
          v-bind="slotProps"
        />
      </template>
    </Histogram>
    <DoubleRangeSlider
      v-model="modelValue"
      :min="min"
      :max="max"
      :slider-color="sliderColor"
      :slider-size="sliderSize"
      :range-color="rangeColor"
      :range-active-color="rangeActiveColor"
      :range-height="rangeHeight"
    />
  </div>
</template>

<script setup lang="ts">
import DoubleRangeSlider from "./DoubleRangeSlider.vue";
import {useVModel} from "@vueuse/core";
import Histogram from "./Histogram.vue";
import {computed, PropType, useSlots} from "vue";
import {HistogramData} from "../types";
import {ColumnAverage} from "../helpers/computeColumnsAverage.ts";

const emit = defineEmits(['update:modelValue'])
const slots = useSlots();

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [0, 100]
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  histogramData: {
    type: Array as PropType<HistogramData>,
    default: () => []
  },
  histogramColumnCount: {
    type: Number,
    default: 17
  },
  histogramColumnAverages: {
    type: Array as PropType<Array<number | ColumnAverage>>,
    default: null
  },
  histogramHeight: {
    type: Number,
    default: 83
  },
  histogramColumnColor: {
    type: String,
    default: '#a3bbff'
  },
  histogramColumnOffset: {
    type: Number,
    default: 5
  },
  histogramNoZeroColumnMinHeightPercent: {
    type: Number,
    default: 0
  },
  sliderColor: {
    type: String,
    default: '#3264fe'
  },
  sliderSize: {
    type: Number,
    default: 20
  },
  rangeColor: {
    type: String,
    default: '#dadae5'
  },
  rangeActiveColor: {
    type: String,
    default: '#3264fe'
  },
  rangeHeight: {
    type: String,
    default: '5px'
  }
})

console.log('### slots 111', slots)

const modelValue = useVModel(props, 'modelValue', emit)

const possibleHistogramColumnCount = computed(() => {
  return props.histogramColumnCount <= props.max ? props.histogramColumnCount : props.max
})
</script>

<style scoped>
.histogram-range-container {

}
</style>
