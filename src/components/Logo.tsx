import LogoOnly from "./LogoOnly";
import { BRAND } from "../utils/constants";
import style from "../styles/logo.module.css";

export default function Logo() {
	return (
		<a
			href="#hero"
			className={style.logo__bg}
			aria-label={`${BRAND} — back to top`}
		>
			<LogoOnly />
			<span className={style.logo__text}>{BRAND}</span>
		</a>
	);
}
