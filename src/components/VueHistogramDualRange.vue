<template>
  <div class="histogram-range-container">
    <Histogram
      :histogram-data="histogramData"
      :histogram-height="histogramHeight"
      :histogram-column-count="possibleHistogramColumnCount"
      :max="max"
      :min="min"
      :histogram-column-color="histogramColumnColor"
      :histogram-column-offset="histogramColumnOffset"
      :slider-size="sliderSize"
    />
    <DoubleRangeSlider
      v-model="modelValue"
      :min="min"
      :max="max"
      :slider-color="sliderColor"
      :slider-border-color="sliderBorderColor"
      :slider-hover-color="sliderHoverColor"
      :slider-size="sliderSize"
      :range-color="rangeColor"
      :range-active-color="rangeActiveColor"
    />
  </div>
</template>

<script setup lang="ts">
import DoubleRangeSlider from "./DoubleRangeSlider.vue";
import {useVModel} from "@vueuse/core";
import Histogram from "./Histogram.vue";
import {computed, PropType} from "vue";
import {HistogramData} from "../types";

const emit = defineEmits(['update:modelValue'])

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
  sliderColor: {
    type: String,
    default: '#3264fe'
  },
  sliderBorderColor: {
    type: String,
    default: '#577cec'
  },
  sliderHoverColor: {
    type: String,
    default: '#577cec'
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
  }
})

const modelValue = useVModel(props, 'modelValue', emit)

const possibleHistogramColumnCount = computed(() => {
  return props.histogramColumnCount <= props.max ? props.histogramColumnCount : props.max
})
</script>

<style scoped>
.histogram-range-container {

}
</style>
