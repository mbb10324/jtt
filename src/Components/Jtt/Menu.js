import { Drawer, Radio, RadioGroup } from "rsuite";

export default function Menu({ open, setOpen, LO, theme, setTheme, localizations, setSelectedLocalization }) {
	function handleUpdateTheme(theme) {
		setTheme(theme);
		localStorage.setItem("theme", theme);
	}

	function handleUpdateLocalization(localization) {
		setSelectedLocalization(localizations[localization.toLowerCase()]);
		localStorage.setItem("localization", localization);
	}

	return (
		<Drawer placement={"bottom"} open={open} onClose={() => setOpen(false)}>
			<Drawer.Header>
				<Drawer.Title>{LO.settings}</Drawer.Title>
			</Drawer.Header>
			<Drawer.Body>
				<div style={{ marginBottom: "10px" }}>
					<label>{LO.theme}:</label>
					<RadioGroup name="localizations" value={theme} onChange={(value) => handleUpdateTheme(value)} style={{ marginTop: "5px" }}>
						<Radio value="Dark" checked>
							{LO.dark}
						</Radio>
						<Radio value="Light">{LO.light}</Radio>
						<Radio value="High-Contrast">{LO.highContrast}</Radio>
					</RadioGroup>
				</div>
				<div>
					<label>{LO.languageWord}:</label>
					<RadioGroup
						name="localizations"
						value={LO.language}
						onChange={(value) => handleUpdateLocalization(value)}
						style={{ marginTop: "5px" }}
					>
						<Radio value="English">English</Radio>
						<Radio value="Spanish">Spanish</Radio>
					</RadioGroup>
				</div>
			</Drawer.Body>
		</Drawer>
	);
}
