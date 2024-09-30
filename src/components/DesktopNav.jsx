import { useState } from "react";
import style from "../styles/desktopnav.module.css";

export default function DesktopNav() {
  const active = {
    color: "var(--primary-color)",
  };
  const [activeMenu, setActiveMenu] = useState("Home");

  function getActiveLink(e) {
    setActiveMenu(e.target.textContent);
  }

  return (
    <div
      className={style.desktop__links}
      role="dialog"
      aria-labelledby="nav-label">
      <ul className={style.desktop__list}>
        <li className={style.desktop__item}>
          <a
            onClick={getActiveLink}
            href="#hero"
            className={`${style.desktop__link} link`}
            style={activeMenu === "Home" ? active : {}}>
            Home
          </a>
        </li>
        <li className={style.desktop__item}>
          <a
            onClick={getActiveLink}
            href="#about"
            className={`${style.desktop__link} link`}
            style={activeMenu === "About Me" ? active : {}}>
            About Me
          </a>
        </li>
        <li className={style.desktop__item}>
          <a
            onClick={getActiveLink}
            href="#projects"
            className={`${style.desktop__link} link`}
            style={activeMenu === "Projects" ? active : {}}>
            Projects
          </a>
        </li>
        <li className={style.desktop__item}>
          <a
            onClick={getActiveLink}
            href="#skills"
            className={`${style.desktop__link} link`}
            style={activeMenu === "Skills" ? active : {}}>
            Skills
          </a>
        </li>
        <li className={style.desktop__item}>
          <a
            onClick={getActiveLink}
            href="#contact"
            className={`${style.desktop__link} link`}
            style={activeMenu === "Contact" ? active : {}}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
