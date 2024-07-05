import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@mui/material";
import { useState } from "react";
import { algoFuncExists, runAlgoFunc } from "../Algorithms/algoUtils";
import { toast } from "react-toastify";
import { Send } from "@mui/icons-material";
import { StyledDialog } from "./StyledComponents";

export const SolveFormButtons = ({ qNum }) => {
	const [question, setQuestion] = useState(0);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		runAlgoFunc(2023, Math.floor(question), question % 1 == 0 ? 1 : 2, event.target[0].value)
			.then((ans) => {
				if (ans == 0 || Number.isNaN(ans)) throw new Error();
				toast(
					`Question ${Math.floor(question)} Part ${
						question % 1 == 0 ? 1 : 2
					}'s answer: ${ans}\n(click to copy answer)`,
					{
						type: "success",
						onClick: () => {
							navigator.clipboard.writeText(`${ans}`);
						},
						autoClose: 20000,
					}
				);
			})
			.catch((_) =>
				toast("Something went wrong", {
					type: "error",
					closeOnClick: true,
				})
			);
		setQuestion(0);
	};

	return (
		<>
			<Button
				sx={{ backgroundColor: "lightgray", borderRadius: "0.5rem", fontWeight: "bold" }}
				onClick={() => setQuestion(qNum)}
				disabled={algoFuncExists(2023, qNum, 1)}
			>
				Part 1
			</Button>
			<Button
				sx={{
					backgroundColor: "lightgray",
					borderRadius: "0.5rem",
					fontWeight: "bold",
				}}
				onClick={() => setQuestion(qNum + 0.5)}
				disabled={algoFuncExists(2023, qNum, 2)}
			>
				Part 2
			</Button>
			<StyledDialog
				open={!!question}
				onClose={() => setQuestion(0)}
				PaperProps={{ component: "form", onSubmit: handleSubmit }}
			>
				<DialogTitle sx={{ color: "#96D2C8" }}>
					Question: {Math.floor(question)} - Part: {question % 1 == 0 ? 1 : 2}
				</DialogTitle>
				<DialogContent sx={{ margin: "1rem" }}>
					{question === 5.5 && (
						<DialogContentText
							sx={{ backgroundColor: "red", color: "white", padding: "0.5rem" }}
							paddingBottom='0.5rem'
						>
							WARNING: This question takes a long time and A LOT of proccessing power
						</DialogContentText>
					)}
					<DialogContentText paddingBottom='0.5rem' sx={{ color: "#96D2C8" }}>
						Please fill your given input
					</DialogContentText>
					<TextField
						sx={{ backgroundColor: "#cccccc" }}
						autoFocus
						multiline
						rows={24}
						required
						label='Input'
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setQuestion(0)}>Cancel</Button>
					<Button type='submit' endIcon={<Send />}>
						Send
					</Button>
				</DialogActions>
			</StyledDialog>
		</>
	);
};
