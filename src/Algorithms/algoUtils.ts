import { init2023 } from "./2023/entry2023";

const functionDB: {
	[year: number]: { [day: number]: { [part: number]: Function } };
} = {};

export const registerFunc = (year: number, day: number, part: number, func: Function): void => {
	if (!functionDB[year]) functionDB[year] = {};
	if (!functionDB[year][day]) functionDB[year][day] = {};
	functionDB[year][day][part] = func;
};

export const runAlgoFunc = async (
	year: number,
	day: number,
	part: number,
	input: string
): Promise<number> => {
	return await functionDB[year][day][part](input.split("\n"));
};

export const initAlgoDB = (): void => {
	init2023();
};

export const algoFuncExists = (year: number, day: number, part: number) => {
	return !functionDB?.[year]?.[day]?.[part];
};
