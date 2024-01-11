import { useRef } from "react";

export default function useSlider(setSplitValue) {
	const rangeSliderRef = useRef(null);

	const handleTouchMove = (e) => {
		if (rangeSliderRef.current) {
			const touch = e.touches[0];
			const sliderRect = rangeSliderRef.current.getBoundingClientRect();
			const relativeTouchPosition = touch.clientX - sliderRect.left;
			const sliderWidth = sliderRect.width;
			const newValue = (relativeTouchPosition / sliderWidth) * 10;
			setSplitValue(newValue <= 1 ? 1 : newValue >= 10 ? 10 : Math.round(newValue));
		}
	};

	return {
		rangeSliderRef,
		handleTouchMove,
	};
}
