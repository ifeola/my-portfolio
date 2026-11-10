import { NAME, TAGLINE } from "../utils/constants";
import LogoOnly from "./LogoOnly";
import style from "../styles/footer.module.css";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className={style.footer}>
			<div className={style.divider}>
				<div className={style.footer__container}>
					<div className={style.footer__brand}>
						<span className={style.footer__logo} aria-hidden="true">
							<LogoOnly />
						</span>
						<span className={style.footer__name}>Forgentik</span>
						<span className={style.footer__tagline}>{TAGLINE}</span>
					</div>
					<div className={style.footer__items}>
						<span>
							© {year} {NAME}
						</span>
						<a href="#hero" className={style.footer__top}>
							Back to top <span aria-hidden="true">↑</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
