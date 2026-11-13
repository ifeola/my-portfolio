import ArrowRightTop from "./ArrowRIghtTop";
import ResumeBtn from "./ResumeBtn";
import { EMAIL, mailtoLink, navLinks, socialLinks } from "../utils/constants";
import style from "../styles/mobilenav.module.css";

type MobileNavProps = {
	open: boolean;
	onClose: () => void;
	activeId: string;
};

export default function MobileNav({ open, onClose, activeId }: MobileNavProps) {
	return (
		<div
			id="mobile-nav"
			className={`${style.nav__links} ${open ? style.active : ""}`}
			aria-hidden={!open}
		>
			<div className={style.nav__sheet}>
				<ul className={style.nav__list}>
					{navLinks.map((link) => {
						const isActive = activeId === link.id;
						return (
							<li key={link.id} className={style.nav__item}>
								<a
									href={link.href}
									className={style.nav__link}
									aria-current={isActive ? "location" : undefined}
									onClick={onClose}
								>
									<span className={style.nav__index} aria-hidden="true">
										{link.index}
									</span>
									<span className={style.nav__label}>{link.label}</span>
									<ArrowRightTop />
								</a>
							</li>
						);
					})}
				</ul>

				<div className={style.nav__meta}>
					<a
						className={style.nav__email}
						href={mailtoLink("Project enquiry — Forgentik")}
					>
						{EMAIL}
					</a>

					<ul className={style.nav__social}>
						{socialLinks.map((social) => (
							<li key={social.link}>
								<a
									href={social.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{social.content}
								</a>
							</li>
						))}
					</ul>

					<ResumeBtn />
				</div>
			</div>
		</div>
	);
}
