import ArrowRightTop from "./ArrowRIghtTop";
import style from "../styles/social.module.css";

export default function Social({ content, link }) {
  return (
    <li>
      <a href={link} className={style.social__link} target="_blank">
        <span>{content}</span>
        <ArrowRightTop />
      </a>
    </li>
  );
}
