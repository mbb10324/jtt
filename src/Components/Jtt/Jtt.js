import { Button, ButtonGroup, Input, InputGroup, InputNumber, Panel, Stack } from "rsuite";
import useCalculateTip from "../../Hooks/CalculateTip";
import { localizations } from "../../Utils/localizations";
import useHandlers from "../../Hooks/Handlers";
import MoreIcon from "@rsuite/icons/More";
import StoreBtns from "./StoreBtns";
import IconBtns from "./IconBtns";
import "rsuite/dist/rsuite.min.css";
import { useState } from "react";
import Menu from "./Menu";
import Split from "./Split";

export default function Jtt({ theme, setTheme }) {
	// Local storage values
	const localStorageLocalization = localStorage.getItem("jttLocalization") || "English";
	// Util values
	const [LO, setSelectedLocalization] = useState(localizations[localStorageLocalization.toLowerCase()]);
	const [showMenu, setShowMenu] = useState(false);
	// Split values
	const [showSplit, setShowSplit] = useState(false);
	const [splitValue, setSplitValue] = useState(1);
	// Input values
	const [billTotal, setBillTotal] = useState("0.00");
	const [tip, setTip] = useState(null);
	const [total, setTotal] = useState(null);
	// Tip percent values
	const [tipPercent, setTipPercent] = useState(20);
	const [customTipValue, setCustomTipValue] = useState(20);
	// Button group selections
	const [selectedTipPercent, setSelectedTipPercent] = useState("20%");
	const [selectedTipRound, setSelectedTipRound] = useState(LO.roundValues[0]);
	const [selectedTotalRound, setSelectedTotalRound] = useState(LO.roundValues[0]);

	// Handler Custom Hook
	const handle = useHandlers(
		LO,
		setShowSplit,
		setSplitValue,
		setBillTotal,
		setTipPercent,
		setCustomTipValue,
		setSelectedTipPercent,
		setSelectedTipRound,
		setSelectedTotalRound
	);

	// Calculations Custom Hook
	useCalculateTip(LO, billTotal, tipPercent, selectedTipRound, selectedTotalRound, setTip, setTotal, setSelectedTipPercent, setCustomTipValue);

	return (
		<div className="jtt-container">
			{/* Title */}
			<h2 style={{ margin: "20px", textAlign: "center" }}>{LO.title}</h2>

			{/* Primary card */}
			<Panel bordered>
				<Stack spacing={1} direction="column" alignItems="stretch">
					<label>{LO.billTotal}:</label>
					<InputGroup style={{ marginBottom: 10 }} className="rs-editable">
						<InputGroup.Addon>$</InputGroup.Addon>
						<Input
							inputMode="decimal"
							pattern="\d*\.?\d{0,2}"
							value={billTotal}
							onChange={(value) => handle.handleBillTotalChange(value)}
							onKeyDown={handle.handleClosingKeyboard}
						/>
					</InputGroup>
					<label>{LO.tipPercent}:</label>
					<ButtonGroup style={{ marginBottom: 10 }} justified>
						{LO.tipValues.map((tipValue) => (
							<Button key={tipValue} active={selectedTipPercent === tipValue} onClick={() => handle.handleTipPercent(tipValue)}>
								{tipValue}
							</Button>
						))}
						<Button active={selectedTipPercent === "Custom"} onClick={() => handle.handleTipPercent("Custom")}>
							<MoreIcon style={{ fontSize: "1.5em" }} />
						</Button>
					</ButtonGroup>
					{selectedTipPercent === "Custom" && (
						<InputNumber
							disabled={selectedTipRound !== LO.roundValues[0] || selectedTotalRound !== LO.roundValues[0]}
							style={{ marginBottom: 10 }}
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
							onKeyDown={handle.handleClosingKeyboard}
							onKeyUp={handle.handleClosingKeyboard}
						/>
					)}
					<label>{LO.roundTip}:</label>
					<ButtonGroup style={{ marginBottom: 10 }} justified>
						{LO.roundValues.map((roundValue) => (
							<Button key={roundValue} active={selectedTipRound === roundValue} onClick={() => handle.handleTipRound(roundValue)}>
								{roundValue}
							</Button>
						))}
					</ButtonGroup>
					<label>{LO.roundTotal}:</label>
					<ButtonGroup style={{ marginBottom: 10 }} justified>
						{LO.roundValues.map((roundValue) => (
							<Button key={roundValue} active={selectedTotalRound === roundValue} onClick={() => handle.handleTotalRound(roundValue)}>
								{roundValue}
							</Button>
						))}
					</ButtonGroup>
					<label>{LO.tip}:</label>
					<Input style={{ marginBottom: 10 }} readOnly value={tip ? `$ ${tip}` : ""} className="rs-input-highlighted" />
					<label>{LO.total}:</label>
					<Input style={{ marginBottom: 10 }} readOnly value={total ? `$ ${total}` : ""} className="rs-input-highlighted" />
				</Stack>
			</Panel>

			{/* Split card */}
			<Split
				LO={LO}
				showSplit={showSplit}
				setShowSplit={setShowSplit}
				splitValue={splitValue}
				setSplitValue={setSplitValue}
				tip={tip}
				total={total}
			/>

			{/* Icon button group */}
			<IconBtns setOpen={setShowMenu} LO={LO} resetAll={handle.handleResetAll} />

			{/* Store buttons */}
			<StoreBtns />

			{/* Menu */}
			<Menu
				open={showMenu}
				setOpen={setShowMenu}
				LO={LO}
				theme={theme}
				setTheme={setTheme}
				localizations={localizations}
				setSelectedLocalization={setSelectedLocalization}
			/>
		</div>
	);
}
