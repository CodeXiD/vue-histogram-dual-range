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
    sliderColor: {
        type: StringConstructor;
        required: true;
    };
    sliderBorderColor: {
        type: StringConstructor;
        required: true;
    };
    sliderHoverColor: {
        type: StringConstructor;
        required: true;
    };
    sliderSize: {
        type: NumberConstructor;
        required: true;
    };
    rangeColor: {
        type: StringConstructor;
        required: true;
    };
    rangeActiveColor: {
        type: StringConstructor;
        required: true;
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
    sliderColor: {
        type: StringConstructor;
        required: true;
    };
    sliderBorderColor: {
        type: StringConstructor;
        required: true;
    };
    sliderHoverColor: {
        type: StringConstructor;
        required: true;
    };
    sliderSize: {
        type: NumberConstructor;
        required: true;
    };
    rangeColor: {
        type: StringConstructor;
        required: true;
    };
    rangeActiveColor: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: unknown[];
    min: number;
    max: number;
}, {}>;
export default _default;
