function getArrayParams(...arr) {
	let min, max, sum, avg;

	min = Infinity;
	max = -Infinity;
	sum = 0;
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] < min)
			min = arr[i];

		if (arr[i] > max)
			max = arr[i];

		sum += arr[i];

	}
	avg = +(sum / arr.length).toFixed(2)

	return {
		min: min,
		max: max,
		avg: avg
	};
}
getArrayParams(-99, 99, 10)
getArrayParams(1, 2, 3, -100, 10)
getArrayParams(5)

function summElementsWorker(...arr) {
	if (!arr || arr.length === 0) return 0;
	return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
	if (!arr || arr.length === 0) return 0;
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (!arr || arr.length === 0) return 0;
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let num of arr) {
		if (num % 2 === 0) {
			sumEvenElement += num;
		} else {
			sumOddElement += num;
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (!arr || arr.length === 0) return 0;
	let sumEven = 0;
	let countEven = 0;

	for (let num of arr) {
		if (num % 2 === 0) {
			sumEven += num;
			countEven++;
		}
	}

	return countEven === 0 ? 0 : sumEven / countEven;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const sum = func(...arrOfArr[i]);
		if (sum > maxWorkerResult) {
			maxWorkerResult = sum;
		}
	}
	return maxWorkerResult;
}

const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];
