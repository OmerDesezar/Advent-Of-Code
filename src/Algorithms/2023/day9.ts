import { registerFunc } from "../algoUtils";

export const registerDay9 = () => {
	registerFunc(2023, 9, 1, (input: string[]) => day9(1, input));
	registerFunc(2023, 9, 2, (input: string[]) => day9(2, input));
};

const day9 = (part: 1 | 2, input: string[]) => {
	const sequences = input.map((s) => s.split(" ").map(Number));
	let sum = 0;
	const currSeqArrs: number[][] = [];
	sequences.forEach((seq) => {
		currSeqArrs.push(seq);
		for (let i = 0; i < currSeqArrs.length; i++) {
			const currSeqArr = currSeqArrs[i];
			if (currSeqArr.some((n) => n !== 0)) {
				currSeqArrs.push([]);
				for (let j = 0; j < currSeqArr.length - 1; j++) {
					currSeqArrs[i + 1].push(currSeqArr[j + 1] - currSeqArr[j]);
				}
			}
		}
		currSeqArrs.reverse();
		sum +=
			part === 1
				? currSeqArrs.reduce((acc, curr) => acc + (curr as any).at(-1), 0)
				: currSeqArrs.reduce((acc, curr) => curr[0] - acc, 0);
		currSeqArrs.length = 0;
	});
	return sum;
};
