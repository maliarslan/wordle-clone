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
			event.preventDefault();
			// There is a bug with 'keyup' event and special keys on Mac, so need to check with 'key' prop as well
			// https://issues.chromium.org/issues/40880986
			// also testable here => https://w3c.github.io/uievents/tools/key-event-viewer.html
			if (getShouldReturn(event)) {
				return;
			}

			callback(event.key);
		}, 10);
	});

	useEffect(() => {
		document.addEventListener("keyup", keyPressEvent);
		return () => {
			document.removeEventListener("keyup", keyPressEvent);
			if (debounceTimeout.current) {
				clearTimeout(debounceTimeout.current);
			}
		};
	}, []);
};

const getShouldReturn = (event: KeyboardEvent) => {
	return event.key === " "
		|| event.key === "ArrowDown"
		|| event.key === "ArrowUp"
		|| event.key === "ArrowLeft"
		|| event.key === "ArrowRight"
		|| event.key === "Tab"
		|| event.key.includes("Lock")
		|| event.key === "Meta"
		|| event.key === "Shift"
		|| event.key === "Alt"
		|| event.key === "Control"
		|| event.key === "Escape"
		|| event.key === "Escape"
		|| event.key === "F1"
		|| event.key === "F2"
		|| event.key === "F3"
		|| event.key === "F4"
		|| event.key === "F5"
		|| event.key === "F6"
		|| event.key === "F7"
		|| event.key === "F8"
		|| event.key === "F9"
		|| event.key === "F10"
		|| event.key === "F11"
		|| event.key === "F12"
		|| event.metaKey
		|| event.altKey
		|| event.shiftKey
		|| event.ctrlKey;
};
