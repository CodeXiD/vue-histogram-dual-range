<template>
  <div
    class="double-range-slider"
    :style="{
      '--sliderColor': sliderColor,
      '--sliderBorderColor': sliderBorderColor,
      '--sliderHoverColor': sliderHoverColor,
      '--sliderSize': sliderSize,
      '--rangeColor': rangeColor,
      '--rangeActiveColor': rangeActiveColor,
      '--rangeFillBg': fillSlider
    }"
  >
    <div class="sliders-control">
      <div class="slider-track" />
      <input
        ref="fromSliderRef"
        class="fromSlider"
        type="range"
        :value="modelValue[0]"
        :min="min"
        :max="max"
        @input="onChangeFromSlider"
      >
      <input
        ref="toSliderRef"
        class="toSlider"
        type="range"
        :value="modelValue[1]"
        :min="min"
        :max="max"
        :style="{ background: sliderBg }"
        @input="onChangeToSlider"
      >
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref, toRefs, defineProps, onUnmounted, computed} from "vue";
import {get, set, useVModel, watchIgnorable} from "@vueuse/core";

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
  sliderColor: {
    type: String,
    required: true,
  },
  sliderBorderColor: {
    type: String,
    required: true,
  },
  sliderHoverColor: {
    type: String,
    required: true,
  },
  sliderSize: {
    type: Number,
    required: true,
  },
  rangeColor: {
    type: String,
    required: true,
  },
  rangeActiveColor: {
    type: String,
    required: true,
  },
});

const { sliderColor, rangeColor, rangeActiveColor, min, max } = toRefs(props)

const modelValue = useVModel(props, 'modelValue', emit)

const getValidRange = ([fromSliderValue, toSliderValue]: [number, number]) => {
  let validFromValue = fromSliderValue;
  let validToValue = toSliderValue;

  if(validFromValue >= validToValue) validFromValue = validToValue - 1;
  if (validToValue <= validFromValue) validToValue = validFromValue + 1;

  if(validFromValue < get(min) || validFromValue > get(max)) validFromValue = get(min);
  if(validToValue > get(max) || validToValue < get(min)) validToValue = get(max);

  return [validFromValue, validToValue]
}

const { ignoreUpdates: ignoreUpdatesModelValue, stop: stopWatchModelValue } = watchIgnorable(modelValue, (newValue, oldValue) => {
  const isEqual = newValue[0] === oldValue[0] && newValue[1] === oldValue[1]
  if(!isEqual) set(modelValue, getValidRange(newValue as [number, number]))
})

onUnmounted(() => {
  stopWatchModelValue();
})


const fromSliderRef = ref();
const toSliderRef = ref();

const sliderBg = ref();

const onChangeFromSlider = (e: Event) => {
  let fromValue = parseInt((e.target as HTMLInputElement).value, 10);
  const toValue = get(modelValue)[1] as number;

  ignoreUpdatesModelValue(() => {
    set(modelValue, getValidRange([fromValue, toValue]))
  })
}

const onChangeToSlider = (e: Event) => {
  const fromValue = get(modelValue)[0] as number;
  let toValue = parseInt((e.target as HTMLInputElement).value, 10);

  ignoreUpdatesModelValue(() => {
    set(modelValue, getValidRange([fromValue, toValue]))
  })
}

const fillSlider = computed(() => {
  const fromPercentValue = ((get(modelValue)[0] as number) / get(max)) * 100;
  const toPercentValue = ((get(modelValue)[1] as number) / get(max)) * 100;

  return `linear-gradient(to right, ${get(rangeColor)} ${fromPercentValue}%, ${get(rangeActiveColor)} ${fromPercentValue}%, ${get(rangeActiveColor)} ${toPercentValue}%, ${get(rangeColor)} ${toPercentValue}%)`;
})
</script>

<style lang="scss" scoped>
.double-range-slider {
  display: flex;
  flex-direction: column;
}

.sliders-control {
  position: relative;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  pointer-events: all;
  width: calc(var(--sliderSize) * 1px);
  height: calc(var(--sliderSize) * 1px);
  background-color: var(--sliderColor);
  border-radius: 50%;
  box-shadow: 0 0 0 1px var(--sliderBorderColor);
  cursor: pointer;
}

input[type=range]::-moz-range-thumb {
  -webkit-appearance: none;
  pointer-events: all;
  width: 20px;
  height: 20px;
  background-color: var(--sliderColor);
  border: 3px solid var(--sliderBorderColor);
  border-radius: 50%;
  box-shadow: 0 0 0 1px var(--sliderColor);
  cursor: pointer;
}

input[type=range]::-webkit-slider-thumb:hover {
  background: var(--sliderHoverColor);
}

input[type=range]::-webkit-slider-thumb:active {
  box-shadow: inset 0 0 3px var(--sliderBorderColor), 0 0 9px var(--sliderBorderColor);
  -webkit-box-shadow: inset 0 0 3px var(--sliderBorderColor), 0 0 9px var(--sliderBorderColor);
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  height: 2px;
  width: 100%;
  position: absolute;
  background-color: transparent;
  pointer-events: none;
}

.fromSlider {
  height: 0;
  z-index: 1;
}

.slider-track {
  width: calc(100% - calc(var(--sliderSize) / 2 * 1px));
  height: 5px;
  background: var(--rangeFillBg);
  position: absolute;
  margin: auto;
  top: 3px;
  bottom: 0;
  left: calc(var(--sliderSize) / 2 * 1px);
  right: calc(var(--sliderSize) / 2 * 1px);
  border-radius: 5px;
}
</style>
