import style from "../styles/menubtn.module.css";

export default function MenuBtn({ toggle, setToggle }) {
  function toggleMenu() {
    setToggle((prevValue) => !prevValue);
  }

  return (
    <button
      onClick={toggleMenu}
      className={`${style.hamburger} ${style.header_hamburger}`}
      type="button"
      aria-expanded={toggle ? true : false}
      aria-labelledby="nav-label">
      <span className={style.hamburger_box}>
        <span className={style.hamburger_inner}></span>
      </span>
    </button>
  );
}
