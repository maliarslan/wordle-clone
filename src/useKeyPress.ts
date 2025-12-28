import { useEffect, useEffectEvent, useRef } from "react";

export const useKeyPress = (
	callback: (key: string) => void
) => {
	const debounceTimeout = useRef<number | null>(null);

	const keyPressEvent = useEffectEvent((event: KeyboardEvent) => {
		if (debounceTimeout.current) {
			clearTimeout(debounceTimeout.current);
		}

		debounceTimeout.current = window.setTimeout(() => {
			if (event.type === "keyup") {
				if (event.key === " ") {
					return;
				}
				callback(event.key);
			}
		}, 100);
	});

	useEffect(() => {
		document.addEventListener("keyup", keyPressEvent);
		document.addEventListener("keydown", keyPressEvent);
		return () => {
			document.removeEventListener("keyup", keyPressEvent);
			document.removeEventListener("keydown", keyPressEvent);
			if (debounceTimeout.current) {
				clearTimeout(debounceTimeout.current);
			}
		};
	}, []);
};
