import { formatToCurrency } from "../Utils/helpers";

export default function useHandlers(
	LO,
	setShowSplit,
	setSplitValue,
	setBillTotal,
	setTipPercent,
	setCustomTipValue,
	setSelectedTipPercent,
	setSelectedTipRound,
	setSelectedTotalRound
) {
	function handleBillTotalChange(value) {
		const formattedValue = formatToCurrency(value);
		setBillTotal(formattedValue);
	}

	function handleTipPercent(tipValue) {
		setSelectedTipRound(LO.roundValues[0]);
		setSelectedTotalRound(LO.roundValues[0]);
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
		setSelectedTotalRound(LO.roundValues[0]);
	}

	function handleTotalRound(roundValue) {
		setSelectedTotalRound(roundValue);
		setSelectedTipRound(LO.roundValues[0]);
	}

	function handleResetAll() {
		setBillTotal("0.00");
		setSelectedTipPercent("20%");
		setSelectedTipRound(LO.roundValues[0]);
		setSelectedTotalRound(LO.roundValues[0]);
		setTipPercent(20);
		setCustomTipValue(20);
		setShowSplit(false);
		setSplitValue(1);
	}

	function handleClosingKeyboard(e) {
		if (e.key === "Enter" && document.activeElement) {
			document.activeElement.blur();
		}
	}

	return {
		handleBillTotalChange,
		handleTipPercent,
		handleTipRound,
		handleTotalRound,
		handleResetAll,
		handleClosingKeyboard,
	};
}
