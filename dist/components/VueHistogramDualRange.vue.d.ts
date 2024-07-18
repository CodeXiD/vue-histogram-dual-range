import { PropType } from "vue";
import { HistogramData } from "../types";
declare const _default: import("vue").DefineComponent<{
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
        type: PropType<Array<number>>;
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
        type: PropType<Array<number>>;
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
    histogramColumnAverages: number[];
    histogramColumnColor: string;
    histogramColumnOffset: number;
}, {}>;
export default _default;
