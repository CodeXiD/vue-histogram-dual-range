import { PropType } from "vue";
import { HistogramData } from "../types";
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
    modelValue: {
        type: ArrayConstructor;
        default: () => number[];
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    histogramData: {
        type: PropType<HistogramData>;
        default: () => never[];
    };
    histogramColumnCount: {
        type: NumberConstructor;
        default: number;
    };
    histogramColumnAverages: {
        type: PropType<Array<number | ColumnAverage>>;
        default: null;
    };
    histogramHeight: {
        type: NumberConstructor;
        default: number;
    };
    histogramColumnColor: {
        type: StringConstructor;
        default: string;
    };
    histogramColumnOffset: {
        type: NumberConstructor;
        default: number;
    };
    sliderColor: {
        type: StringConstructor;
        default: string;
    };
    sliderBorderColor: {
        type: StringConstructor;
        default: string;
    };
    sliderHoverColor: {
        type: StringConstructor;
        default: string;
    };
    sliderSize: {
        type: NumberConstructor;
        default: number;
    };
    rangeColor: {
        type: StringConstructor;
        default: string;
    };
    rangeActiveColor: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: () => number[];
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    histogramData: {
        type: PropType<HistogramData>;
        default: () => never[];
    };
    histogramColumnCount: {
        type: NumberConstructor;
        default: number;
    };
    histogramColumnAverages: {
        type: PropType<Array<number | ColumnAverage>>;
        default: null;
    };
    histogramHeight: {
        type: NumberConstructor;
        default: number;
    };
    histogramColumnColor: {
        type: StringConstructor;
        default: string;
    };
    histogramColumnOffset: {
        type: NumberConstructor;
        default: number;
    };
    sliderColor: {
        type: StringConstructor;
        default: string;
    };
    sliderBorderColor: {
        type: StringConstructor;
        default: string;
    };
    sliderHoverColor: {
        type: StringConstructor;
        default: string;
    };
    sliderSize: {
        type: NumberConstructor;
        default: number;
    };
    rangeColor: {
        type: StringConstructor;
        default: string;
    };
    rangeActiveColor: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: unknown[];
    min: number;
    max: number;
    sliderColor: string;
    sliderBorderColor: string;
    sliderHoverColor: string;
    sliderSize: number;
    rangeColor: string;
    rangeActiveColor: string;
    histogramData: HistogramData;
    histogramHeight: number;
    histogramColumnCount: number;
    histogramColumnAverages: (number | ColumnAverage)[];
    histogramColumnColor: string;
    histogramColumnOffset: number;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;

type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
