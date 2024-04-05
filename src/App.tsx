import { AppBar } from "@/components/AppBar";
import { ThemeWrapper } from "@/components/ThemeWrapper";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
	return (
		<ThemeWrapper>
			<CssBaseline />
			<AppBar />
		</ThemeWrapper>
	);
};

export default App;
