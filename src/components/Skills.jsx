import style from "../styles/skills.module.css";
import { skills } from "../utils/constants";
import Skill from "./Skill";
import Diamond from "./Diamond";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <Diamond left="-0.4rem" />
      <Diamond right="-0.4rem" />
      <div className="container">
        <h3 className="subtitle section-subtitle">My Skills</h3>
        <div className={style.skills__content}>
          <ul className={style.skills__list}>
            {skills.map((skill, index) => {
              return <Skill skill={skill.skill} svg={skill.svg} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
