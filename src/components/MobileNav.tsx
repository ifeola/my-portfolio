import { navLinks } from "../utils/constants";
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
								{link.label}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
