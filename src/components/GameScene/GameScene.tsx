import { Stack } from "@mui/material";
import Letter from "@/components/Letter/Letter.tsx";
import { Row } from "@/components/Row/Row.tsx";
import { useState } from "react";

const WORDLE = "wordle";
const TRIALS = 5;
const getBoard = () => Array.from({ length: TRIALS }).map(() => {
	return Array.from({ length: WORDLE.length }).map(() => "");
});

const GameScene = () => {
	const [board] = useState(() => getBoard());
	// const [rowTurn, setRowTurn] = useState(0);

	// const hasEmptyCells = (row: string[]) => {
	// 	return row.some(cell => cell.length === 0);
	// };

	// const handleSubmit = () => {
	// 	const row = board[rowTurn];
	//
	// 	if (hasEmptyCells(row)) {
	// 		// show can't submit tooltip
	// 		return;
	// 	}
	//
	// 	// submit row
	// };

	return (
		<Stack direction="column" justifyContent="center" p={1} width="100%" height="100%">
			{board.map((letters, rowIndex) => {
				return (
					<Row key={rowIndex}>
						{letters.map((word, letterIndex) =>
							<Letter key={letterIndex} letter={word} letterIndex={letterIndex} wordle={WORDLE} />
						)}
					</Row>
				);
			})}

		</Stack>
	);
};

export default GameScene;
