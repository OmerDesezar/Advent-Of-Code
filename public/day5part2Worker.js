onmessage = ({ data }) => {
	const { start, len, maps } = data;
	let min = Number.MAX_SAFE_INTEGER;
	for (let i = 0; i < len; i++) {
		let seed = start + i;
		maps.forEach((map) => {
			const found = map.find(([_, src, len]) => seed >= src && seed < src + len);
			if (found) {
				const [dest, src] = found;
				seed += dest - src;
			}
		});
		min = Math.min(min, seed);
	}
	postMessage(min);
};
