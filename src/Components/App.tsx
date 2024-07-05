import { Box, ThemeProvider, createTheme, styled } from "@mui/material";
import { Header } from "./Header";
import { QGrid } from "./QGrid";
import { ToastContainer } from "react-toastify";
import myTheme from "./myTheme";
import "react-toastify/dist/ReactToastify.css";
import "highlight.js/styles/github.css";

const theme = createTheme(myTheme);

const StyledContainer = styled(Box)({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	overflow: "hidden",
	height: "100vh",
	backgroundImage: " url('src/assets/background.jpg')",
});

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<StyledContainer>
				<Header />
				<QGrid />
				<ToastContainer />
			</StyledContainer>
		</ThemeProvider>
	);
};
