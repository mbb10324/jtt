import { Input, Panel, Slider, Stack, Toggle } from "rsuite";
import { useState } from "react";

export default function Split({ split, setSplit }) {
	const [value, setValue] = useState(1);

	function handleChange() {
		setSplit(!split);
	}

	return (
		<>
			<Panel bordered style={{ marginTop: "20px" }}>
				<label style={{ marginRight: "20px" }}>Split?</label>
				<Toggle checked={split} checkedChildren="Yes" unCheckedChildren="No" onChange={handleChange} />
				{split && (
					<div className="fade-in">
						<Stack spacing={1} direction="column" alignItems="stretch" style={{ marginTop: 20 }}>
							<label style={{ marginRight: "20px" }}>Number of People: {value}</label>
							<Slider
								progress
								min={1}
								max={30}
								style={{ marginTop: 10, marginBottom: 10 }}
								value={value}
								onChange={(value) => {
									setValue(value);
								}}
							/>
							<label>Split Tip:</label>
							<Input style={{ marginBottom: 10 }} readOnly value="$3.25" />
							<label>Split Total:</label>
							<Input style={{ marginBottom: 10 }} readOnly value="$8.50" />
						</Stack>
					</div>
				)}
			</Panel>
		</>
	);
}
