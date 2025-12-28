import { AppBar } from "@/components/AppBar";
import { ThemeWrapper } from "@/components/ThemeWrapper";
import CssBaseline from "@mui/material/CssBaseline";
import GameScene from "@/components/GameScene/GameScene.tsx";

const App = () => {
	return (
		<ThemeWrapper>
			<CssBaseline />
			<AppBar />
			<GameScene />
		</ThemeWrapper>
	);
};

export default App;
