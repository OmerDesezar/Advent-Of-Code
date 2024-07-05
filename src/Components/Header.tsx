import { Computer } from "@mui/icons-material";
import { Box, Button, Link, Typography, styled } from "@mui/material";

const StyledContainer = styled(Box)({
	height: "2rem",
	backgroundColor: "#1C2335",
	borderBottom: "4px solid #637ab4",
	padding: "0.5rem",
	display: "flex",
	alignItems: "center",
	gap: "1rem",
	width: "100%",
	justifyContent: "space-between",
});

const StyledLeftContainer = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: "1rem",
	paddingLeft: "0.5rem",
});

const StyledLink = styled(Link)({
	color: "#FAB496",
	marginRight: "1rem",
	userSelect: "none",
	textDecoration: "underline",
});

export const Header = () => {
	return (
		<StyledContainer>
			<StyledLeftContainer>
				<Computer sx={{ color: "#96D2C8", fontSize: "3rem" }} />
				<Typography variant='h5' sx={{ color: "#96D2C8", userSelect: "none" }}>
					Advent Of Code Solver
				</Typography>
				<Button>Home</Button>
				<Button>About</Button>
			</StyledLeftContainer>
			<StyledLink href='https://adventofcode.com/' target='_blank' rel='noopener'>
				Advent Of Code Website
			</StyledLink>
		</StyledContainer>
	);
};
