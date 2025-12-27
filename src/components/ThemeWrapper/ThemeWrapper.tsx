import { darkTheme } from "@/theme/dark";
import { lightTheme } from "@/theme/light";
import { PaletteMode, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { PropsWithChildren, useMemo, useState } from "react";
import { ThemeWrapperContext } from "./ThemeWrapperContext";

export const ThemeWrapper = ({ children }: PropsWithChildren) => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [mode, setMode] = useState<PaletteMode>(
		prefersDarkMode ? "dark" : "light"
	);

	const themeWrapperUtils = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
			},
		}), []);

	const theme = useMemo(
		() => (mode === "light" ? lightTheme : darkTheme),
		[mode]
	);

	return (
		<ThemeWrapperContext.Provider value={themeWrapperUtils}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeWrapperContext.Provider>
	);
};
