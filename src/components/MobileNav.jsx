import { useState } from "react";
import style from "../styles/mobilenav.module.css";

export default function MobileNav({ toggle }) {
  const active = {
    color: "var(--primary-color)",
    borderColor: "var(--primary-transparent)",
  };
  const [activeMenu, setActiveMenu] = useState("Home");

  function getActiveLink(e) {
    console.log(e.target.textContent);

    setActiveMenu(e.target.textContent);
  }

  return (
    <div
      className={`${style.nav__links} ${toggle ? style.active : ""}`}
      role="dialog"
      aria-expanded={toggle ? true : false}
      aria-labelledby="nav-label">
      <ul className={style.nav__list}>
        <li className={style.nav__item}>
          <a
            onClick={getActiveLink}
            href="#hero"
            className={`${style.nav__link} active`}
            style={activeMenu === "Home" ? active : {}}>
            Home
          </a>
        </li>
        <li className={style.nav__item}>
          <a
            onClick={getActiveLink}
            href="#about"
            className={`${style.nav__link} active`}
            style={activeMenu === "About Me" ? active : {}}>
            About Me
          </a>
        </li>
        <li className={style.nav__item}>
          <a
            onClick={getActiveLink}
            href="#projects"
            className={`${style.nav__link} active`}
            style={activeMenu === "Projects" ? active : {}}>
            Projects
          </a>
        </li>
        <li className={style.nav__item}>
          <a
            onClick={getActiveLink}
            href="#skills"
            className={`${style.nav__link} active`}
            style={activeMenu === "Skills" ? active : {}}>
            Skills
          </a>
        </li>
        <li className={style.nav__item}>
          <a
            onClick={getActiveLink}
            href="#contact"
            className={`${style.nav__link} active`}
            style={activeMenu === "Contact" ? active : {}}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
