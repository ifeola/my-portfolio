import { navLinks } from "../utils/constants";
import style from "../styles/desktopnav.module.css";

type DesktopNavProps = {
	activeId: string;
};

export default function DesktopNav({ activeId }: DesktopNavProps) {
	return (
		<div className={style.desktop__links}>
			<ul className={style.desktop__list}>
				{navLinks.map((link) => {
					const isActive = activeId === link.id;
					return (
						<li key={link.id} className={style.desktop__item}>
							<a
								href={link.href}
								className={style.desktop__link}
								aria-current={isActive ? "location" : undefined}
							>
								<span className={style.desktop__index} aria-hidden="true">
									{link.index}
								</span>
								<span className={style.desktop__label}>{link.label}</span>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
