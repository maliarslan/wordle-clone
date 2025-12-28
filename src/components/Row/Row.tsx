import { PropsWithChildren } from "react";
import { Stack } from "@mui/material";

export const Row = ({ children }: PropsWithChildren) => {
	return (
		<Stack direction="row" alignSelf="center">
			{children}
		</Stack>
	);
};
