import Diamond from "../components/Diamond";
import Skill from "../components/Skill";
import { skillGroups, skills, skillsIntro } from "../utils/constants";
import style from "../styles/skills.module.css";

export default function Skills() {
	return (
		<section id="stack" aria-labelledby="stack-title">
			<Diamond left="-0.4rem" />
			<Diamond right="-0.4rem" />
			<div className="container skills__container">
				<p className="subtitle">{skillsIntro.eyebrow}</p>
				<div className={style.skills__intro}>
					<h2 id="stack-title">{skillsIntro.heading}</h2>
					<p className="body-copy">{skillsIntro.summary}</p>
				</div>

				<ul className={style.skills__list} aria-label="Core tools">
					{skills.map((skill) => (
						<Skill key={skill.skill} skill={skill.skill} svg={skill.svg} />
					))}
				</ul>

				<div className={style.skills__groups}>
					{skillGroups.map((group) => (
						<div className={style.skills__group} key={group.label}>
							<h3 className={style.skills__group_title}>{group.label}</h3>
							<ul className={style.skills__chips}>
								{group.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
