import { Box } from "@mui/material";
import { useCallback } from "react";

interface LetterProps {
	letter: string;
	letterIndex: number;
	wordle: string;
}

const Letter = ({ letter, letterIndex, wordle }: LetterProps) => {
	const getBackgroundColor = useCallback((
		letter: string,
		letterIndex: number,
		wordle: string
	) => {
		if (letter === "") {
			return "#3c3c3c";
		}

		return letter === wordle[letterIndex]
			? "green"
			: wordle.includes(letter)
				? "#b7b75ae0"
				: "red";
	}, []);

	return (
		<Box sx={{
			border: theme => `1px solid ${theme.palette.info.main}`,
			borderRadius: "1px",
			padding: "1rem",
			backgroundColor: getBackgroundColor(letter, letterIndex, wordle),
			width: "4rem",
			height: "4rem",
		}}
		>
			{letter}
		</Box>
	);
};

export default Letter;
