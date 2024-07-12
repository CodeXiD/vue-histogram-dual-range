export default function computeColumnsAverages({ histogramDataMap, step, min, max }: {
    histogramDataMap: Map<number, number>;
    step: number;
    min: number;
    max: number;
}): number[];
