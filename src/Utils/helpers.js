export function formatToCurrency(value) {
	const numericValue = value.replace(/[^\d]/g, "");
	const cleanedValue = String(parseInt(numericValue, 10));
	const paddedValue = cleanedValue.padStart(3, "0");
	const formattedValue = paddedValue.slice(0, -2) + "." + paddedValue.slice(-2);
	return formattedValue;
}
