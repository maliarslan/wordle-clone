import { Stack } from "@mui/material";
import Letter from "@/components/Letter/Letter.tsx";
import { Row } from "@/components/Row/Row.tsx";
import { useState } from "react";
import { useKeyPress } from "@/useKeyPress.ts";

const WORDLE = "wordle";
const TRIALS = 5;
const getBoard = () => Array.from({ length: TRIALS }).map(() => {
	return Array.from({ length: WORDLE.length }).map(() => "");
});

const GameScene = () => {
	const [board, setBoard] = useState(() => getBoard());
	const [turn, setTurn] = useState({
		row: 0,
		cell: 0,
	});

	const hasEmptyCells = (row: string[]) => {
		return row.some(cell => cell.length === 0);
	};

	const handleSubmit = () => {
		const row = board[turn.row];

		if (hasEmptyCells(row)) {
			// show can't submit tooltip
			return;
		}

		// submit row
	};
	const handleBackSpace = () => {
		// const row = board[turn.row];

		// handle backspace
	};

	const handleKeyDown = (key: string) => {
		if (key === "Enter") {
			handleSubmit();
		}

		if (key === "Backspace") {
			handleBackSpace();
		}

		if (turn.row >= WORDLE.length) {
			return;
		}

		setBoard((prevState) => {
			return prevState.map((row, rowIndex) => {
				if (rowIndex === turn.row) {
					return row.map((cell, cellIndex) => {
						if (cellIndex === turn.cell) {
							return key;
						}
						return cell;
					});
				} else {
					return row;
				}
			});
		});

		setTurn((prevState) => {
			return {
				...prevState,
				cell: prevState.cell++
			};
		});
	};

	useKeyPress(handleKeyDown);

	return (
		<Stack direction="column" justifyContent="center" p={1} width="100%" height="100%">
			{board.map((letters, rowIndex) => {
				return (
					<Row key={rowIndex}>
						{letters.map((letter, letterIndex) =>
							<Letter key={letterIndex} letter={letter} letterIndex={letterIndex} wordle={WORDLE} />
						)}
					</Row>
				);
			})}

		</Stack>
	);
};

export default GameScene;
