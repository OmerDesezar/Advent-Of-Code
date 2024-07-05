import { Dialog, DialogProps, IconButton, styled } from "@mui/material";
import { deepMerge } from "../Logic/utils";

export const StyledIconButton = styled(IconButton, {
	shouldForwardProp: (prop) =>
		prop !== "color" && prop !== "hoverProps" && prop !== "transitionDuration",
})<{ color?: string; hoverProps?: any; transitionDuration?: number }>(
	({ color = "black", hoverProps = {}, transitionDuration = 0.3 }) => ({
		color,
		"&:hover": {
			backgroundColor: "transparent",
			...hoverProps,
		},
		transition: `all ${transitionDuration}s`,
	})
);

export const StyledDialog = (props: DialogProps) => {
	const mergedProps = deepMerge(
		{
			transitionDuration: { enter: 400, exit: 0 },
			PaperProps: {
				sx: {
					width: "40rem",
					height: "50rem",
					borderRadius: "1rem",
					backgroundColor: "#1C2335",
					border: "2px solid #FAB496",
				},
			},
		},
		props
	);
	return <Dialog {...mergedProps} />;
};
