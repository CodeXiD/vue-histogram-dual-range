# Vue Histogram Dual Range
## Histogram dual range for Vue3

<p align="center">
    <img src="https://github.com/CodeXiD/vue-histogram-dual-range/raw/main/resources/header.png" width="500">
</p>

<p align="center">
    <img src="https://img.shields.io/github/license/codexid/vue-histogram-dual-range?style=flat-square" />
    <img alt="npm" src="https://img.shields.io/npm/dm/vue-histogram-dual-range?style=flat-square">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/codexid/vue-histogram-dual-range?style=flat-square">
    <img alt="npm" src="https://img.shields.io/npm/v/vue-histogram-dual-range?style=flat-square">
</p>

## 📦 Installation
### yarn
`yarn add vue-histogram-dual-range`

### npm
`npm i vue-histogram-dual-range`

## 🔧 Simple usage
```js
import VueHistogramDualRange from "vue-histogram-dual-range";
import "vue-histogram-dual-range/style.css"

const value = ref([20, 70])

const histogramData: HistogramData = [
    { value: 1, count: 10 },
    { value: 2, count: 6 },
    { value: 3, count: 8 },
    //...
];
```

```xml
<VueHistogramDualRange
    v-model="value"
    :min="1"
    :max="100"
    :histogram-data="histogramData"
/>
```


## 📋 Props

| Property                |  Type  | Default | Description                                                                                                                                                                                                                                          |
|-------------------------|:------:|:-------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| min                     | number |    0    | Set slider minimum value                                                                                                                                                                                                                             |
| max                     | number |   100   | Set slider maximum value                                                                                                                                                                                                                             |
| histogramData           | array  |   []    | Data to display in a histogram                                                                                                                                                                                                                       |
| histogramColumnAverages | array  |  null   | You can avoid passing the histogramData prop, passing instead an array of numbers histogramColumnAverages which will define the value for each column in order from first to last (Useful for optimization if the range is a large range of numbers) |
| histogramColumnCount    | number |   17    | Number of bars in a histogram                                                                                                                                                                                                                        |
| histogramHeight         | number |   83    | Histogram height                                                                                                                                                                                                                                     |
| histogramColumnColor    | string | #a3bbff | Histogram column colors                                                                                                                                                                                                                              |
| histogramColumnOffset   | number |    5    | Distance between histogram columns                                                                                                                                                                                                                   |
| sliderColor             | string | #3264fe | Slider dot color                                                                                                                                                                                                                                     |
| sliderBorderColor       | string | #577cec | Stroke color of slider points                                                                                                                                                                                                                        |
| sliderHoverColor        | string | #577cec | Slider hover dot color                                                                                                                                                                                                                               |
| sliderSize              | number |   20    | Slider dot size in pixels                                                                                                                                                                                                                            |
| rangeColor              | string | #dadae5 | Slider line color that is not included in the active range                                                                                                                                                                                           |
| rangeActiveColor        | string | #3264fe | The color of the slider line that is INCLUDED in the active range                                                                                                                                                                                    |

## 🔧 Event
| Name              | Description                                  |
|-------------------|----------------------------------------------|
| update:modelValue | Called when the value of the sliders changes |

## Histogram data for large numbers
If you manipulate large numbers in ranges, for example, in a range from 1 to 20314 - the quantity value is 64, then you can pass the values exactly divided by quantity to the histogramData prop, and also pass the number of objects that are in HistogramData to `histogramColumnCount`

### Example
```js
const histogramData: HistogramData = [
    { value: 1, count: 64 },
    { value: 20315, count: 2 },
    { value: 40630, count: 3 },
    { value: 60944, count: 0 },
    { value: 81258, count: 4 },
    { value: 101573, count: 2 },
    { value: 121887, count: 2 },
    { value: 142201, count: 3 },
    { value: 162516, count: 0 },
];
```

```xml
<VueHistogramDualRange
    :min="1"
    :max="162516"
    :histogram-column-count="9"
    :histogram-data="histogramData"
/>
```

<p align="center">
    <img src="https://github.com/CodeXiD/vue-histogram-dual-range/raw/main/resources/example-large-numbers.png" width="500">
</p>

## Optimized example with a large range
If you are dealing with large numbers and see that there are performance problems, then this is a consequence of the fact that when passing the `histogramData` prop (without passing `histogramColumnAverages`), the package tries to split the `histogramData` into pieces (equal to the number of `histogramColumnCount`) and from these pieces calculate the average value, if you you already know them, you can use the `histogramColumnAverages` prop and solve the performance problem

The `histogramColumnAverages` prop accepts an array of numbers, the number of numbers must be equal to the number of columns (from the `histogramColumnCount` prop), each number is the arimetic average for one column

* In this case, if you passed the `histogramColumnAverages` prop, then you do not need to pass the `histogramData` prop
### Example
```js
const sliderValue = ref([1, 9999999999])
const histogramDataAverages = [
    30,
    20,
    50,
    40,
    10,
    0,
    90,
    70,
    30
];
```

```xml
<VueHistogramDualRange
    v-model="sliderValue"
    :min="1"
    :max="9999999999"
    :histogram-column-count="9"
    :histogram-column-averages="histogramDataAverages"
/>
```
