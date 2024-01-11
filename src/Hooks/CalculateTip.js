import { useEffect } from "react";

export default function useCalculateTip(
	LO,
	billTotal,
	tipPercent,
	selectedTipRound,
	selectedTotalRound,
	setTip,
	setTotal,
	setSelectedTipPercent,
	setCustomTipValue
) {
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
				case LO.roundValues[2]:
					tipValue = Math.ceil(tipValue);
					decipherEffectiveTipPercent(tipValue);
					break;
				case LO.roundValues[1]:
					tipValue = Math.floor(tipValue);
					decipherEffectiveTipPercent(tipValue);
					break;
				default:
					tipValue = Number(tipValue.toFixed(2));
					break;
			}

			let totalValue = Number(billTotal) + tipValue;

			switch (selectedTotalRound) {
				case LO.roundValues[2]:
					totalValue = Math.ceil(totalValue);
					tipValue = totalValue - billTotal;
					decipherEffectiveTipPercent(tipValue);
					break;
				case LO.roundValues[1]:
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [billTotal, tipPercent, selectedTipRound, selectedTotalRound]);
}
