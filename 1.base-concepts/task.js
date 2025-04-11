"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = (b ** 2) - (4 * a * c);
	if (d === 0) {
		let x = -b / (2 * a);
		return [x];
	} else if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		return [x1, x2];
	} else(d < 0)
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyRate = (percent / 100) / 12;
	let principal = amount - contribution;
	let monthlyPayment = principal * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));
	let totalAmount = monthlyPayment * countMonths;
	return Math.round(totalAmount * 100) / 100;
}