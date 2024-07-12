export default function computeColumnsAverages({ histogramDataMap, step, min, max }: {
	histogramDataMap: Map<number, number>,
	step: number,
	min: number,
	max: number,
}): number[] {
	const averages: number[] = [];

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
			averages.push(Number((columnSum / columnValuesCount).toFixed(2)));
		} else {
			averages.push(0)
		}
	}

	return averages;
}
