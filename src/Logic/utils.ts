export const getHexGradient = (
	startColor: string,
	endColor: string,
	index: number,
	len: number
): string => {
	const [sR, sG, sB] = hexToRGB(startColor);
	const [eR, eG, eB] = hexToRGB(endColor);
	const perc = index / (len - 1);
	return RGBToHex([lerp(sR, eR, perc), lerp(sG, eG, perc), lerp(sB, eB, perc)]);
};

const hexToRGB = (hex: string): number[] => {
	const c = parseInt(hex.substring(1), 16);
	return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
};

const RGBToHex = (rgb: number[]): string => {
	const [r, g, b] = rgb;
	return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
};

const lerp = (from, to, perc) => from + (to - from) * perc;

export function deepMerge(target, ...sources) {
	if (!sources.length) return target;
	const source = sources.shift();
	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) Object.assign(target, { [key]: {} });
				deepMerge(target[key], source[key]);
			} else {
				Object.assign(target, { [key]: source[key] });
			}
		}
	}
	return deepMerge(target, ...sources);
}

function isObject(item) {
	return item && typeof item === "object" && !Array.isArray(item);
}
