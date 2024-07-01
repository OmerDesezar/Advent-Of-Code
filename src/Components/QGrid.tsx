import { Send } from "@mui/icons-material";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { algoFuncExists, runAlgoFunc } from "../Algorithms/algoUtils";
import { toast } from "react-toastify";

export const QGrid = () => {
	const [question, setQuestion] = useState(0);
	return (
		<>
			<Grid
				container
				gap='1rem'
				rowGap='2rem'
				sx={{ display: "flex", justifyContent: "center", paddingTop: "4rem", width: "60%" }}
			>
				{Array(25)
					.fill(0)
					.map((_, i) => (
						<Grid
							key={`Q${i}`}
							md={2}
							item
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								rowGap: "0.3rem",
								borderRadius: "1rem",
								border: "1px solid cyan",
							}}
						>
							<Typography sx={{ display: "flex", justifyContent: "center" }}>
								Question {i + 1}
							</Typography>
							<Button
								sx={{ backgroundColor: "lightgray", borderRadius: "0.5rem" }}
								onClick={() => setQuestion(i + 1)}
								disabled={algoFuncExists(2023, i + 1, 1)}
							>
								Part 1
							</Button>
							<Button
								sx={{ backgroundColor: "lightgray", borderRadius: "0.5rem 0.5rem 1rem 1rem" }}
								onClick={() => setQuestion(i + 1.5)}
								disabled={algoFuncExists(2023, i + 1, 2)}
							>
								Part 2
							</Button>
						</Grid>
					))}
			</Grid>
			<Dialog
				open={!!question}
				onClose={() => setQuestion(0)}
				transitionDuration={{ enter: 400, exit: 0 }}
				PaperProps={{
					component: "form",
					sx: { width: "40rem" },
					onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
						event.preventDefault();
						runAlgoFunc(
							2023,
							Math.floor(question),
							question % 1 == 0 ? 1 : 2,
							event.target[0].value
						)
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
					},
				}}
			>
				<DialogTitle>
					Question: {Math.floor(question)} - Part: {question % 1 == 0 ? 1 : 2}
				</DialogTitle>
				<DialogContent sx={{ padding: "0 1rem 0 1rem" }}>
					{question === 5.5 && (
						<DialogContentText sx={{ backgroundColor: "red" }} paddingBottom='0.5rem'>
							WARNING: This question takes a long time and A LOT of proccessing power
						</DialogContentText>
					)}
					<DialogContentText paddingBottom='0.5rem'>Please fill your given input</DialogContentText>
					<TextField autoFocus multiline rows={20} required label='Input' fullWidth />
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setQuestion(0)}>Cancel</Button>
					<Button type='submit' endIcon={<Send />}>
						Send
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
