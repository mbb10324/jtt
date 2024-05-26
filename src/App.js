import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jtt from "./Components/Jtt/Jtt";
import "./App.css";
import { CustomProvider } from "rsuite";
import { useState } from "react";
// import Footer from "./Components/Footer/Footer";

export default function App() {
	const localStorageTheme = localStorage.getItem("jttTheme") || "Dark";
	const [theme, setTheme] = useState(localStorageTheme);

	return (
		<div className="app">
			<CustomProvider theme={theme.toLocaleLowerCase()}>
				<Router basename="/jtt">
					<Routes>
						<Route path="/" element={<Jtt theme={theme} setTheme={setTheme} />} />
					</Routes>
					{/* <Footer /> */}
				</Router>
			</CustomProvider>
		</div>
	);
}
