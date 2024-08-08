import { PropType } from "vue";
import { HistogramData } from "../types";
import 'floating-vue/dist/style.css';
import { ColumnAverage } from "../helpers/computeColumnsAverage.ts";
declare function __VLS_template(): {
    columnTooltip?(_: {
        column: {
            heightPercentage: number;
            x: number;
            data: number | ColumnAverage;
        };
    }): any;
};
declare const __VLS_component: import("vue").DefineComponent<{
    histogramData: {
        type: PropType<HistogramData>;
        default: () => number[];
    };
    histogramHeight: {
        type: NumberConstructor;
        default: number;
    };
    histogramColumnCount: {
        type: NumberConstructor;
        required: true;
    };
    histogramColumnAverages: {
        type: PropType<Array<number | ColumnAverage>>;
        required: true;
    };
    min: {
        type: NumberConstructor;
        required: true;
    };
    max: {
        type: NumberConstructor;
        required: true;
    };
    histogramColumnColor: {
        type: StringConstructor;
        required: true;
    };
    histogramColumnOffset: {
        type: NumberConstructor;
        required: true;
    };
    sliderSize: {
        type: NumberConstructor;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    histogramData: {
        type: PropType<HistogramData>;
        default: () => number[];
    };
    histogramHeight: {
        type: NumberConstructor;
        default: number;
    };
    histogramColumnCount: {
        type: NumberConstructor;
        required: true;
    };
    histogramColumnAverages: {
        type: PropType<Array<number | ColumnAverage>>;
        required: true;
    };
    min: {
        type: NumberConstructor;
        required: true;
    };
    max: {
        type: NumberConstructor;
        required: true;
    };
    histogramColumnColor: {
        type: StringConstructor;
        required: true;
    };
    histogramColumnOffset: {
        type: NumberConstructor;
        required: true;
    };
    sliderSize: {
        type: NumberConstructor;
        required: true;
    };
}>>, {
    histogramData: HistogramData;
    histogramHeight: number;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
