import { Button, ButtonGroup, Input, InputGroup, InputNumber, Panel, Stack } from "rsuite";
import { roundValues, tipValues } from "../Utils/values";
import { useState, useEffect } from "react";
import "rsuite/dist/rsuite.min.css";
import Split from "./Split";

export default function Jtt() {
	const [split, setSplit] = useState(false);
	const [billTotal, setBillTotal] = useState("0.00");
	const [tip, setTip] = useState(null);
	const [total, setTotal] = useState(null);
	const [tipPercent, setTipPercent] = useState(20);
	const [customTipValue, setCustomTipValue] = useState(20);
	const [selectedTipPercent, setSelectedTipPercent] = useState("20%");
	const [selectedTipRound, setSelectedTipRound] = useState("N/A");
	const [selectedTotalRound, setSelectedTotalRound] = useState("N/A");

	const styles = {
		marginBottom: 10,
	};

	function formatToCurrency(value) {
		const numericValue = value.replace(/[^\d]/g, "");
		const cleanedValue = String(parseInt(numericValue, 10));
		const paddedValue = cleanedValue.padStart(3, "0");
		const formattedValue = paddedValue.slice(0, -2) + "." + paddedValue.slice(-2);
		return formattedValue;
	}

	function handleBillTotalChange(value) {
		const formattedValue = formatToCurrency(value);
		setBillTotal(formattedValue);
	}

	function handleTipPercent(tipValue) {
		setSelectedTipRound("N/A");
		setSelectedTotalRound("N/A");
		setCustomTipValue(20);
		if (tipValue === "Custom") {
			setTipPercent(20);
		} else {
			const tipValueRaw = tipValue.replace("%", "");
			setTipPercent(Number(tipValueRaw));
		}
		setSelectedTipPercent(tipValue);
	}

	function handleTipRound(roundValue) {
		setSelectedTipRound(roundValue);
		setSelectedTotalRound("N/A");
	}

	function handleTotalRound(roundValue) {
		setSelectedTotalRound(roundValue);
		setSelectedTipRound("N/A");
	}

	function resetAll() {
		setBillTotal("0.00");
		setSelectedTipPercent("20%");
		setSelectedTipRound("N/A");
		setSelectedTotalRound("N/A");
		setTipPercent(20);
		setCustomTipValue(20);
		setSplit(false);
	}

	useEffect(() => {
		if (billTotal) {
			let tipValue = billTotal * (tipPercent / 100);
			let effectiveTipPercent = 0;

			function decipherEffectiveTipPercent(tipValue) {
				setSelectedTipPercent("Custom");
				effectiveTipPercent = (tipValue / billTotal) * 100;
				setCustomTipValue(effectiveTipPercent.toFixed(2));
			}

			switch (selectedTipRound) {
				case "Up":
					tipValue = Math.ceil(tipValue);
					decipherEffectiveTipPercent(tipValue);
					break;
				case "Down":
					tipValue = Math.floor(tipValue);
					decipherEffectiveTipPercent(tipValue);
					break;
				default:
					tipValue = Number(tipValue.toFixed(2));
					break;
			}

			let totalValue = Number(billTotal) + tipValue;

			switch (selectedTotalRound) {
				case "Up":
					totalValue = Math.ceil(totalValue);
					tipValue = totalValue - billTotal;
					decipherEffectiveTipPercent(tipValue);
					break;
				case "Down":
					totalValue = Math.floor(totalValue);
					tipValue = totalValue - billTotal;
					decipherEffectiveTipPercent(tipValue);
					break;
				default:
					totalValue = Number(totalValue.toFixed(2));
					break;
			}

			setTip(tipValue.toFixed(2));
			setTotal(totalValue.toFixed(2));
		}
	}, [billTotal, tipPercent, selectedTipRound, selectedTotalRound]);

	return (
		<>
			<h1 style={{ margin: "20px" }}>Just The Tip</h1>
			<Panel bordered>
				<Stack spacing={1} direction="column" alignItems="stretch">
					<label>Bill Total:</label>
					<InputGroup style={styles} className="rs-editable">
						<InputGroup.Addon>$</InputGroup.Addon>
						<Input value={billTotal} onChange={(value) => handleBillTotalChange(value)} />
					</InputGroup>
					<label>Tip %:</label>
					<ButtonGroup style={styles} justified>
						{tipValues.map((tipValue) => (
							<Button key={tipValue} active={selectedTipPercent === tipValue} onClick={() => handleTipPercent(tipValue)}>
								{tipValue}
							</Button>
						))}
					</ButtonGroup>
					{selectedTipPercent === "Custom" && (
						<InputNumber
							disabled={selectedTipRound !== "N/A" || selectedTotalRound !== "N/A"}
							style={styles}
							postfix="%"
							defaultValue={20}
							value={customTipValue || ""}
							max={100}
							min={0}
							className="rs-editable"
							onChange={(value) => {
								setTipPercent(Number(value));
								setCustomTipValue(value);
							}}
						/>
					)}
					<label>Round Tip:</label>
					<ButtonGroup style={styles} justified>
						{roundValues.map((roundValue) => (
							<Button key={roundValue} active={selectedTipRound === roundValue} onClick={() => handleTipRound(roundValue)}>
								{roundValue}
							</Button>
						))}
					</ButtonGroup>
					<label>Round Total:</label>
					<ButtonGroup style={styles} justified>
						{roundValues.map((roundValue) => (
							<Button key={roundValue} active={selectedTotalRound === roundValue} onClick={() => handleTotalRound(roundValue)}>
								{roundValue}
							</Button>
						))}
					</ButtonGroup>
					<label>Tip:</label>
					<Input style={styles} readOnly value={tip ? `$ ${tip}` : ""} />
					<label>Total:</label>
					<Input style={styles} readOnly value={total ? `$ ${total}` : ""} />
				</Stack>
			</Panel>
			<Split split={split} setSplit={setSplit} />
			<Button style={{ marginTop: "20px", marginBottom: "20px" }} appearance="default" block onClick={resetAll}>
				Reset
			</Button>
		</>
	);
}
