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


<!-- TOC -->
* [Vue Histogram Dual Range](#vue-histogram-dual-range)
  * [Histogram dual range for Vue3](#histogram-dual-range-for-vue3)
  * [📦 Installation](#-installation)
    * [yarn](#yarn)
    * [npm](#npm)
  * [🔧 Simple usage](#-simple-usage)
  * [📋 Props](#-props)
  * [🔧 Event](#-event)
  * [📦 Slots](#-slots)
  * [Histogram data for large numbers](#histogram-data-for-large-numbers)
    * [Example](#example)
  * [Optimized example with a large range](#optimized-example-with-a-large-range)
    * [Example](#example-1)
  * [Optimized example with a large range and tooltip](#optimized-example-with-a-large-range-and-tooltip)
    * [Example slotProps.column for the first column from the example above](#example-slotpropscolumn-for-the-first-column-from-the-example-above)
<!-- TOC -->


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
>
  <template #columnTooltip="slotProps">
    <div>{{ slotProps.column.data.range.from }} - {{ slotProps.column.data.range.to }}</div>
    <div>Total: {{ slotProps.column.data.sum }}</div>
  </template>
</VueHistogramDualRange>
```


## 📋 Props

| Property                |               Type               | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|-------------------------|:--------------------------------:|:-------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| min                     |              number              |    0    | Set slider minimum value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| max                     |              number              |   100   | Set slider maximum value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| histogramData           |              array               |   []    | Data to display in a histogram                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| histogramColumnAverages | number[] or {avg: number ... }[] |  null   | You can choose not to pass the histogramData property, passing instead an array of numbers histogramColumnAverages, which will determine the value for each column in order from first to last (useful for optimization if the range is a large range of numbers), or you can pass an array of objects with a numeric property avg (the behavior is identical to passing an array of numbers), in this case you can set your own properties to the object and get them in the columnsTooltip slot prop via slotProps.column.data |
| histogramColumnCount    |              number              |   17    | Number of bars in a histogram                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| histogramHeight         |              number              |   83    | Histogram height                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| histogramColumnColor    |              string              | #a3bbff | Histogram column colors                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| histogramColumnOffset   |              number              |    5    | Distance between histogram columns                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| sliderColor             |              string              | #3264fe | Slider dot color                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| sliderBorderColor       |              string              | #577cec | Stroke color of slider points                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| sliderHoverColor        |              string              | #577cec | Slider hover dot color                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| sliderSize              |              number              |   20    | Slider dot size in pixels                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| rangeColor              |              string              | #dadae5 | Slider line color that is not included in the active range                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| rangeActiveColor        |              string              | #3264fe | The color of the slider line that is INCLUDED in the active range                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## 🔧 Event
| Name              | Description                                  |
|-------------------|----------------------------------------------|
| update:modelValue | Called when the value of the sliders changes |

## 📦 Slots

| Name          | Props                                                                        | Description                                                                                                           |
|---------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| columnTooltip | { column: { x: number; sum: number; data: number or { avg: number; ... } } } | The slot that will be inserted into the tooltip; slotProps has a column property with data about the displayed column |


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

## Optimized example with a large range and tooltip
In the `histogramColumnAverages` prop you can also pass your own object with one required property - `avg`, this object will 
be passed to the `columnTooltip` slot, and you can access them in this way `slotProps.column`


```js
const histogramDataAveragesObject = [
  {
    avg: 40,
    sum: 100,
    range: {
      from: 0,
      to: 1000000
    }
  },
  {
    avg: 10,
    sum: 200,
    range: {
      from: 1000000,
      to: 2000000
    }
  },
  {
    avg: 100,
    sum: 500,
    range: {
      from: 2000000,
      to: 3000000
    }
  },
    // ...
];
```

```xml
<VueHistogramDualRange
    v-model="sliderValue"
    :min="1"
    :max="9999999999"
    :histogram-column-count="9"
    :histogram-column-averages="histogramDataAverages"
>
    <template #columnTooltip="slotProps">
        <div>{{ slotProps.column.data.range.from }} - {{ slotProps.column.data.range.to }}</div>
        <div>Total: {{ slotProps.column.data.sum }}</div>
    </template>
</VueHistogramDualRange>
```

### Example slotProps.column for the first column from the example above

```json
{
    "heightPercentage": 40,
    "x": 0,
    "data": {
        "avg": 40,
        "sum": 100,
        "range": {
            "from": 0,
            "to": 1000000
        }
    }
}
```
