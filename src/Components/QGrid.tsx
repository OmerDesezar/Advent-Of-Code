import { Box, Grid, Typography, styled } from "@mui/material";
import { ShowCodeButton } from "./ShowCodeButton";
import { SolveFormButtons } from "./SolveFormButtons";
import { getHexGradient } from "../Logic/utils";

const StyledGridContainer = styled(Grid)({
	display: "flex",
	justifyContent: "center",
	paddingTop: "4rem",
	width: "50%",
	gap: "1rem",
	rowGap: "2rem",
});

const StyledGridItem = styled(Grid, { shouldForwardProp: (prop) => prop !== "index" })<{
	index: number;
}>(({ index }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	rowGap: "0.3rem",
	borderRadius: "1rem",
	padding: "0.5rem",
	backgroundColor: getHexGradient("#FAB496", "#96D2C8", index, 25),
	border: "2px solid black",
}));

const StyledTitle = styled(Typography)({
	display: "flex",
	justifyContent: "center",
	userSelect: "none",
});

export const QGrid = () => {
	return (
		<StyledGridContainer container>
			{Array(25)
				.fill(0)
				.map((_, i) => (
					<StyledGridItem key={`Q${i}`} md={2} index={i} item>
						<Box display='flex' justifyContent='space-evenly' height='1.5rem' alignItems='center'>
							<StyledTitle>Question {i + 1}</StyledTitle>
							<ShowCodeButton qNum={i + 1} />
						</Box>
						<SolveFormButtons qNum={i + 1} />
					</StyledGridItem>
				))}
		</StyledGridContainer>
	);
};
