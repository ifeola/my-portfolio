import style from "../styles/skill.module.css";

export default function Skill({ skill, svg }) {
  return (
    <li className={style.skill__item}>
      <>{svg}</>
      <span>{skill}</span>
    </li>
  );
}
