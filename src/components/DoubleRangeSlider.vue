<template>
  <VueDoubleRangeInput
    :min="min"
    :max="max"
    :min-value="modelValue[0]"
    :max-value="modelValue[1]"
    :color="rangeActiveColor"
    :track-color="rangeColor"
    :handler-color="sliderColor"
    :hander-width="sliderSize"
    :hander-height="sliderSize"
    :track-height="rangeHeight"
    :show-numbers="false"
    :push-on-touch="true"
    @update:min-value="onChangeFromSlider"
    @update:max-value="onChangeToSlider"
  />
</template>

<script setup lang="ts">
import VueDoubleRangeInput from 'vue-double-range-input';
import 'vue-double-range-input/dist/style.css';
import {toRefs, defineProps, onUnmounted} from "vue";
import {get, set, useMemoize, useVModel, watchIgnorable} from "@vueuse/core";

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
  rangeHeight: {
    type: String,
    required: true,
  },
});

const { sliderColor, rangeColor, rangeActiveColor, min, max } = toRefs(props)

const modelValue = useVModel(props, 'modelValue', emit)

const getValidRange = useMemoize(([fromSliderValue, toSliderValue]: [number, number]) => {
  let validFromValue = fromSliderValue;
  let validToValue = toSliderValue;

  if(validFromValue > validToValue) validFromValue = validToValue;
  if (validToValue < validFromValue) validToValue = validFromValue;

  if(validFromValue < get(min) || validFromValue > get(max)) validFromValue = get(min);
  if(validToValue > get(max) || validToValue < get(min)) validToValue = get(max);

  return [validFromValue, validToValue]
})

const { ignoreUpdates: ignoreUpdatesModelValue, stop: stopWatchModelValue } = watchIgnorable(modelValue, (newValue, oldValue) => {
  const isEqual = newValue[0] === oldValue[0] && newValue[1] === oldValue[1]
  if(!isEqual) set(modelValue, getValidRange(newValue as [number, number]))
})

onUnmounted(() => {
  stopWatchModelValue();
})

const onChangeFromSlider = (newValue: string) => {
  let fromValue = parseInt(newValue, 10);
  const toValue = get(modelValue)[1] as number;

  ignoreUpdatesModelValue(() => {
    set(modelValue, [fromValue, toValue])
  })
}

const onChangeToSlider = (newValue: string) => {
  const fromValue = get(modelValue)[0] as number;
  let toValue = parseInt(newValue, 10);

  ignoreUpdatesModelValue(() => {
    set(modelValue, [fromValue, toValue])
  })
}
</script>

<style lang="scss" scoped>
::v-deep(.dri-numbers) {
  display: none;
}
</style>
