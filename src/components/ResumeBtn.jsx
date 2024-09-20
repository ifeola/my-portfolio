import style from "../styles/resumebtn.module.css"

export default function ResumeBtn() {
  return (
    <a href="#" className={style.resume__btn} download>
      <span className={style.resume__btn_text}>Resume</span>
    </a>
  );
}
