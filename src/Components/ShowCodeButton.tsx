import { Code } from "@mui/icons-material";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Tooltip,
} from "@mui/material";
import hljs from "highlight.js";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { StyledDialog, StyledIconButton } from "./StyledComponents";

export const ShowCodeButton = ({ qNum = 0 }) => {
	const [codeNum, setCodeNum] = useState(0);
	const [codeText, setCodeText] = useState("");

	const handleClick = async (qNum) => {
		try {
			const response = await fetch(`src/Algorithms/2023/day${qNum}.ts`);
			if (response.ok) {
				const text = await response.text();
				setCodeText(text);
			} else {
				toast(`Error fetching file`, { type: "error", closeOnClick: true });
			}
		} catch (error) {
			toast(`Error fetching file`, { type: "error", closeOnClick: true });
		}
	};

	return (
		<>
			<Tooltip title='Show Code' disableInteractive>
				<StyledIconButton
					hoverProps={{ color: "grey" }}
					onClick={() => {
						setCodeNum(qNum);
						handleClick(qNum);
					}}
				>
					<Code />
				</StyledIconButton>
			</Tooltip>
			<StyledDialog open={!!codeNum} onClose={() => setCodeNum(0)}>
				<DialogTitle sx={{ color: "#96D2C8" }}>Question: {qNum}'s Code</DialogTitle>
				<DialogContent sx={{ margin: "1rem", backgroundColor: "#cccccc" }}>
					{React.Children.toArray(
						codeText
							.split("\n")
							.filter((s) => !s.includes("sourceMappingURL"))
							.map((line) => (
								<DialogContentText
									sx={{
										paddingLeft: `${(line.length - line.trim().length) * 0.5}rem`,
										marginTop: "0.5rem",
										marginBottom: "0.5rem",
									}}
									dangerouslySetInnerHTML={{
										__html: hljs.highlight(line, {
											language: "typescript",
										}).value,
									}}
								/>
							))
					)}
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setCodeNum(0)}>Close</Button>
				</DialogActions>
			</StyledDialog>
		</>
	);
};
