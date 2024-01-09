import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jtt from "./Components/Jtt.js";
import { CustomProvider } from "rsuite";
import "./App.css";

export default function App() {
	return (
		<div className="app">
			<CustomProvider theme="dark">
				<Router>
					<Routes>
						<Route path="/" element={<Jtt />} />
					</Routes>
				</Router>
			</CustomProvider>
		</div>
	);
}
