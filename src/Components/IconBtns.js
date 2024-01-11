import ShareOutlineIcon from "@rsuite/icons/ShareOutline";
import ReloadIcon from "@rsuite/icons/Reload";
import GearIcon from "@rsuite/icons/Gear";

export default function IconBtns({ setOpen, LO, resetAll }) {
	return (
		<div className="icon-grid">
			<div className="icon-grid-stack" onClick={() => setOpen(true)}>
				<GearIcon style={{ fontSize: "3em" }} />
				<p>{LO.settings}</p>
			</div>
			<div className="icon-grid-stack">
				<ShareOutlineIcon style={{ fontSize: "3em" }} />
				<p>{LO.share}</p>
			</div>
			<div className="icon-grid-stack" onClick={resetAll}>
				<ReloadIcon style={{ fontSize: "3em" }} />
				<p>{LO.reset}</p>
			</div>
		</div>
	);
}
