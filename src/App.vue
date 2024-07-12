<template>
  <div class="app-container">
    <h1>Vue histogram dual range</h1>
    <div class="examples-wrapper">
      <div class="example">
        <VueHistogramDualRange
          v-model="sliderValue1"
          :min="1"
          :max="100"
          :histogram-data="histogramValue"
        />

        <div class="value">
          Value: <code>{{ sliderValue1 }}</code>
        </div>
      </div>

      <div class="example">
        <VueHistogramDualRange
          v-model="sliderValue2"
          :min="1"
          :max="345345"
          :histogram-data="histogramValue2"
        />

        <div class="value">
          Value: <code>{{ sliderValue2 }}</code>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import VueHistogramDualRange from "./components/VueHistogramDualRange.vue";
import {ref} from "vue";
import {HistogramData} from "./types";
import VueHistogramDualRange from "vue-histogram-dual-range";
import "vue-histogram-dual-range/style.css"

const sliderValue1 = ref([20, 70])
const sliderValue2 = ref([1, 345345])

const histogramValue: HistogramData = [
  { value: 1, count: 10 },
  { value: 2, count: 6 },
  { value: 3, count: 8 },
  { value: 4, count: 1 },
  { value: 5, count: 2 },
  { value: 6, count: 1 },
  { value: 7, count: 6 },
  { value: 8, count: 4 },
  { value: 9, count: 4 },
  { value: 10, count: 20 },
  { value: 11, count: 24 },
  { value: 12, count: 22 },
  { value: 13, count: 7 },
  { value: 20, count: 20 },
  { value: 21, count: 29 },
  { value: 22, count: 29 },
  { value: 23, count: 12 },
  { value: 45, count: 13 },
  { value: 46, count: 17 },
  { value: 50, count: 29 },
  { value: 98, count: 40 },
  { value: 99, count: 30 },
  { value: 100, count: 20 },
  { value: 155, count: 5 },
  { value: 156, count: 10 },
  { value: 157, count: 20 },
  { value: 160, count: 50 },
]

const histogramValue2: HistogramData = [
  { value: 1, count: 64 },
  { value: 20315, count: 2 },
  { value: 40630, count: 3 },
  { value: 60944, count: 0 },
  { value: 81258, count: 4 },
  { value: 101573, count: 2 },
  { value: 121887, count: 2 },
  { value: 142201, count: 3 },
  { value: 162516, count: 0 },
  { value: 182830, count: 0 },
  { value: 203145, count: 0 },
  { value: 223459, count: 0 },
  { value: 243773, count: 0 },
  { value: 264088, count: 0 },
  { value: 284402, count: 0 },
  { value: 304716, count: 1 },
  { value: 325031, count: 1 },
]
</script>

<style>
.app-container {
  width: 600px;
  margin: 0 auto;
  max-width: calc(100vw - 80px);

  .examples-wrapper {
    margin: 100px auto 0 auto;
    width: 500px;
    max-width: calc(100% - 40px);

    .example {
      padding-bottom: 50px;
      margin-bottom: 50px;
      border-bottom: 2px dashed gray;

      .value {
        margin-top: 25px;
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
