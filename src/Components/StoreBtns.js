import AndroidIcon from "@rsuite/icons/Android";
import IOsIcon from "@rsuite/icons/IOs";
import { IconButton } from "rsuite";

export default function StoreBtns() {
	return (
		<div className="store-btns">
			<IconButton icon={<AndroidIcon />} placement="left" style={{ width: "40%" }}>
				Google Play
			</IconButton>
			<IconButton icon={<IOsIcon />} placement="left" style={{ width: "40%" }}>
				App Store
			</IconButton>
		</div>
	);
}
