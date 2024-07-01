import { Computer } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";

export const Header = () => {
	return (
		<Box
			height={"2rem"}
			sx={{
				backgroundColor: "grey",
				padding: "0.5rem",
				display: "flex",
				alignItems: "center",
				gap: "1rem",
				width: "99%",
				justifyContent: "space-between",
			}}
		>
			<Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
				<Computer sx={{ fontSize: "3rem" }} />
				<Typography variant='h5' sx={{ userSelect: "none" }}>
					Advent Of Code Solver
				</Typography>
			</Box>
			<Link paddingRight='1rem' href='https://adventofcode.com/' target='_blank' rel='noopener'>
				Advent Of Code Website
			</Link>
		</Box>
	);
};
