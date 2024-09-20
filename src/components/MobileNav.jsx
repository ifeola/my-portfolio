import style from "../styles/mobilenav.module.css";
import { navLinks } from "../utils/constants";

export default function MobileNav({ toggle }) {
  // const display = { height: toggle ? "flex" : "none" };

  return (
    <div
      className={`${style.nav__links} ${toggle ? style.active : ""}`}
      role="dialog"
      aria-expanded={toggle ? true : false}
      aria-labelledby="nav-label">
      <ul className={style.nav__list}>
        {navLinks.map((navLink, index) => {
          return (
            <li className={style.nav__item} key={index}>
              <a href="#hero" className={`${style.nav__link}`}>
                {navLink}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
