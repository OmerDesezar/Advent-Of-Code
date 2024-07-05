export default {
	main: {
		primary: "#222831",
		secondary: "#393E46",
		third: "#00ADB5",
		forth: "#EEEEEE",
	},
};

declare module "@mui/material/styles" {
	interface Theme {
		main: {
			primary: string;
			secondary: string;
			third: string;
			forth: string;
		};
	}
	interface ThemeOptions {
		main: {
			primary: string;
			secondary: string;
			third: string;
			forth: string;
		};
	}
}
