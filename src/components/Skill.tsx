import type { ReactNode } from "react";
import style from "../styles/skill.module.css";

type SkillProps = {
	skill: string;
	svg: ReactNode;
};

export default function Skill({ skill, svg }: SkillProps) {
	return (
		<li className={style.skill__item} data-reveal>
			<span className={style.skill__icon} aria-hidden="true">
				{svg}
			</span>
			<span>{skill}</span>
		</li>
	);
}
