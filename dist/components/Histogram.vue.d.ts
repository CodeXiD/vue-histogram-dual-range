import { PropType } from "vue";
import { HistogramData } from "../types";
declare const _default: import("vue").DefineComponent<{
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
        type: PropType<Array<number>>;
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
        type: PropType<Array<number>>;
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
export default _default;
