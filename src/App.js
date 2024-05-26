import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jtt from "./Components/Jtt/Jtt";
import "./App.css";
import Terms from "./Components/Legals/Terms";
import Privacy from "./Components/Legals/Privacy";
import { CustomProvider } from "rsuite";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";

export default function App() {
	const localStorageTheme = localStorage.getItem("theme") || "Dark";
	const [theme, setTheme] = useState(localStorageTheme);

	return (
		<div className="app">
			<CustomProvider theme={theme.toLocaleLowerCase()}>
				<Router>
					<Routes>
						<Route path="/" element={<Jtt theme={theme} setTheme={setTheme} />} />
						<Route path="/terms" element={<Terms />} />
						<Route path="/privacy" element={<Privacy />} />
					</Routes>
					<Footer />
				</Router>
			</CustomProvider>
		</div>
	);
}
