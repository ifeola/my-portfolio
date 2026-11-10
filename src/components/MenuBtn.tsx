import type { Dispatch, SetStateAction } from "react";
import style from "../styles/menubtn.module.css";

type MenuBtnProps = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MenuBtn({ open, setOpen }: MenuBtnProps) {
	return (
		<button
			type="button"
			onClick={() => setOpen((previous) => !previous)}
			className={style.hamburger}
			aria-expanded={open}
			aria-controls="mobile-nav"
			aria-label={open ? "Close menu" : "Open menu"}
		>
			<span className={style.hamburger_box} aria-hidden="true">
				<span className={style.hamburger_inner} />
			</span>
		</button>
	);
}
