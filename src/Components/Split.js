import { Input, Panel, Slider, Stack, Toggle } from "rsuite";
import useSlider from "../Hooks/Slider";

export default function Split({ LO, showSplit, setShowSplit, splitValue, setSplitValue, tip, total }) {
	const { rangeSliderRef, handleTouchMove } = useSlider(setSplitValue);

	return (
		<>
			<Panel bordered style={{ marginTop: "20px" }}>
				<label style={{ marginRight: "20px" }}>{LO.split}</label>
				<Toggle checked={showSplit} checkedChildren={LO.yes} unCheckedChildren={LO.no} onChange={() => setShowSplit(!showSplit)} />
				{showSplit && (
					<div className="fade-in">
						<Stack spacing={1} direction="column" alignItems="stretch" style={{ marginTop: 20 }}>
							<label style={{ marginRight: "20px" }}>
								{LO.splitPeople}: {splitValue}
							</label>
							<Slider
								ref={rangeSliderRef}
								progress
								graduated
								tooltip={false}
								min={1}
								max={10}
								style={{ marginTop: 10, marginBottom: 10 }}
								value={splitValue}
								onChange={(value) => {
									setSplitValue(value);
								}}
								onTouchMove={handleTouchMove}
							/>
							<label>{LO.splitTip}:</label>
							<Input
								style={{ marginBottom: 10 }}
								readOnly
								value={`$ ${(tip / splitValue).toFixed(2)}`}
								className="rs-input-highlighted"
							/>
							<label>{LO.splitTotal}:</label>
							<Input
								style={{ marginBottom: 10 }}
								readOnly
								value={`$ ${(total / splitValue).toFixed(2)}`}
								className="rs-input-highlighted"
							/>
						</Stack>
					</div>
				)}
			</Panel>
		</>
	);
}
