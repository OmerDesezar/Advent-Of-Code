import { registerFunc } from "../algoUtils";

const day5Part1 = async (input: string[]) => {
	const { seeds, maps } = getRestructuredData(input);
	const promiseArr: any[] = [];
	seeds.forEach((seed) => {
		promiseArr.push(asyncFind(seed, 1, maps));
	});
	const values = await Promise.all(promiseArr);
	return Math.min(...values);
};

const day5Part2 = async (input: string[]) => {
	const { seeds, maps } = getRestructuredData(input);
	const promiseArr: any[] = [];
	for (let i = 0; i < seeds.length; i = i + 2) {
		const start = seeds[i];
		const len = seeds[i + 1];
		promiseArr.push(asyncFind(start, len, maps));
	}
	const values = await Promise.all(promiseArr);
	return Math.min(...values);
};

export const registerDay5 = () => {
	registerFunc(2023, 5, 1, day5Part1);
	registerFunc(2023, 5, 2, day5Part2);
};

const asyncFind = async (start: number, len: number, maps: number[][][]) => {
	return new Promise((resolve, reject) => {
		const worker = new Worker("./public/day5part2Worker.js");
		worker.postMessage({ start, len, maps });
		worker.onmessage = (mEvent) => resolve(mEvent.data);
		worker.onmessageerror = (mEvent) => reject(mEvent.data);
	});
};

const getRestructuredData = (input: string[]) => {
	const seeds = input[0]
		.split(":")[1]
		.split(" ")
		.filter((s) => s !== "")
		.map(Number);
	const maps: number[][][] = [];
	let currVal: number[][] = [];
	let currName: string = "";
	for (let i = 1; i < input.length; i++) {
		const d = input[i];
		if (d.includes(":")) {
			if (currVal.length > 0) {
				maps.push(currVal);
			}
			currName = d;
			currVal = [];
		} else if (d !== "") currVal.push(d.split(" ").map(Number));
	}
	maps.push(currVal);

	return { seeds, maps };
};
