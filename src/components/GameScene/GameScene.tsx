import { Stack } from "@mui/material";
import Letter from "@/components/Letter/Letter.tsx";
import { Row } from "@/components/Row/Row.tsx";
import { useState } from "react";
import { useKeyPress } from "@/components/GameScene/useKeyPress.ts";

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

	const handleBackspace = () => {
		if (turn.cell === 0) {
			return;
		}

		const newBoard = board.map((row, rowIndex) => {
			if (rowIndex === turn.row) {
				return row.map((cell, cellIndex) => {
					if (cellIndex === turn.cell - 1) {
						return "";
					}
					return cell;
				});
			} else {
				return row;
			}
		});

		const newTurn = {
			...turn,
			cell: turn.cell - 1
		};

		setBoard(newBoard);

		setTurn(newTurn);
	};

	const handleKeyPress = (key: string) => {
		const newBoard = board.map((row, rowIndex) => {
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

		const newTurn = {
			...turn,
			cell: turn.cell + 1
		};

		setBoard(newBoard);

		setTurn(newTurn);
	};

	const handleKeyDown = (key: string) => {
		if (key === "Enter") {
			handleSubmit();
			return;
		}

		if (key === "Backspace") {
			handleBackspace();
			return;
		}

		if (turn.cell >= WORDLE.length) {
			return;
		}

		handleKeyPress(key);
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
