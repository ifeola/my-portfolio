import style from "../styles/desktopnav.module.css";
import { navLinks } from "../utils/constants";

export default function DesktopNav() {
  return (
    <div
      className={style.desktop__links}
      role="dialog"
      aria-labelledby="nav-label">
      <ul className={style.desktop__list}>
        {navLinks.map((navLink, index) => {
          return (
            <li className={style.desktop__item} key={index}>
              <a href="#hero" className={`${style.desktop__link}`}>
                {navLink}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
