import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname;

	return (
		<div className="footer">
			{path !== "/" && <p onClick={() => navigate("/")}>Home</p>}
			{path !== "/terms" && <p onClick={() => navigate("/terms")}>Terms</p>}
			{path !== "/privacy" && <p onClick={() => navigate("/privacy")}>Privacy</p>}
		</div>
	);
}
