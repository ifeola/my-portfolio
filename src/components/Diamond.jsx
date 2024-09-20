import style from "../styles/diamond.module.css";

export default function Diamond({ right, left }) {
  return (
    <div className={style.diamond} style={{ right: right, left: left }}></div>
  );
}
