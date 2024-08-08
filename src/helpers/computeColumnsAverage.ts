export interface ColumnAverage {
	avg: number
	sum: number
	range: {
		from: number
		to: number
	}
}

export default function computeColumnsAverages({ histogramDataMap, step, min, max }: {
	histogramDataMap: Map<number, number>,
	step: number,
	min: number,
	max: number,
}): ColumnAverage[] {
	const averages: ColumnAverage[] = [];

	for (let i = min; i <= max; i += step) {

		let columnSum = 0;
		let columnValuesCount = 0;

		// проходимся по значениям которые находится в ренже текущего шага
		for (let j = i; j < i + step && j <= max; j++) {
			if (histogramDataMap.has(j)) {
				columnSum += histogramDataMap.get(j)!;
				columnValuesCount++;
			}
		}

		if(columnValuesCount > 0) {
			averages.push({
				avg: Number((columnSum / columnValuesCount).toFixed(2)),
				sum: columnSum,
				range: {
					from: i,
					to: Math.min(max, i + step)
				}
			});
		} else {
			averages.push({
				avg: 0,
				sum: 0,
				range: {
					from: i,
					to: Math.min(max, i + step)
				}
			})
		}
	}

	return averages;
}
