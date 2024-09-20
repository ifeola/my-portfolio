import style from "../styles/button.module.css";
import ArrowRight from "./ArrowRight";

export default function Button({ content }) {
  return (
    <a
      href="mailto:arogunmasaabayomi95@gmail.com"
      target="_blank"
      className={style.cta}>
      <span className={style.cta__text}>{content}</span>
      <ArrowRight />
    </a>
  );
}
