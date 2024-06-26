import { ThemeWrapperContext } from "@/components/ThemeWrapper";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MUIAppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";

export const AppBar = () => {
	const theme = useTheme();
	const themeUtils = useContext(ThemeWrapperContext);

	return (
		<MUIAppBar position="static" component={"nav"}>
			<Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
				<Divider />
				<IconButton
					sx={{ ml: 1 }}
					onClick={themeUtils.toggleColorMode}
					color="inherit"
				>
					{theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
				</IconButton>
			</Toolbar>
		</MUIAppBar>
	);
};
