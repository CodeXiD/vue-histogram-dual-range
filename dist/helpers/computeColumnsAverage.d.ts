export interface ColumnAverage {
    avg: number;
    sum: number;
    range: {
        from: number;
        to: number;
    };
}
export default function computeColumnsAverages({ histogramDataMap, step, min, max }: {
    histogramDataMap: Map<number, number>;
    step: number;
    min: number;
    max: number;
}): ColumnAverage[];
