import ArowBackIcon from "@rsuite/icons/ArowBack";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LegalsLayout({ children }) {
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<div style={{ padding: "20px", paddingBottom: "40px" }}>
			<ArowBackIcon
				style={{ fontSize: "3em", cursor: "pointer" }}
				color="var(--rs-primary-500)"
				onClick={() => navigate(-1)}
			/>
			<div>{children}</div>
		</div>
	);
}
