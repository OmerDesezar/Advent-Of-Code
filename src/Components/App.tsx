import { Box } from "@mui/material";
import { Header } from "./Header";
import { QGrid } from "./QGrid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
	return (
		<Box display='flex' flexDirection='column' alignItems='center' overflow='hidden'>
			<Header />
			<QGrid />
			<ToastContainer />
		</Box>
	);
};
