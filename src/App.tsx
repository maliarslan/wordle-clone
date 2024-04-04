import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "./components/AppBar/AppBar";
import ThemeWrapper from "./components/ThemeWrapper/ThemeWrapper";

const App = () => {
	return (
		<ThemeWrapper>
			<CssBaseline />
			<AppBar />
		</ThemeWrapper>
	);
};

export default App;
