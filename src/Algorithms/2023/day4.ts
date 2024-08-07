import { registerFunc } from "../algoUtils";

const day4Part1 = (input: string[]) => {
	let sum = 0;
	input.forEach((val) => {
		let prize = 0;
		const [winNums, tryNums] = val
			.split(":")[1]
			.split("|")
			.map((nums) => nums.split(" ").filter((s) => s !== ""));
		tryNums.forEach((tryNum) => {
			if (winNums.includes(tryNum)) {
				prize = prize == 0 ? 1 : prize * 2;
			}
		});
		sum += prize;
	});
	return sum;
};

const day4Part2 = (input: string[]) => {
	const cards: number[][] = [];
	input.forEach((val) => {
		let prize = 0;
		const [winNums, tryNums] = val
			.split(":")[1]
			.split("|")
			.map((nums) => nums.split(" ").filter((s) => s !== ""));
		tryNums.forEach((tryNum) => {
			if (winNums.includes(tryNum)) prize++;
		});
		cards.push([1, prize]);
	});
	let sum = 0;
	for (let i = 0; i < cards.length; i++) {
		let [count, points] = cards[i];
		sum += count;
		for (let p = 1; p <= points; p++) {
			if (cards[i + p]) cards[i + p][0] += count;
		}
	}
	return sum;
};

export const registerDay4 = () => {
	registerFunc(2023, 4, 1, day4Part1);
	registerFunc(2023, 4, 2, day4Part2);
};
