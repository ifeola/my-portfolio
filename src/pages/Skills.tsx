import Diamond from "../components/Diamond";
import SectionLabel from "../components/SectionLabel";
import Skill from "../components/Skill";
import {
	coreToolsLabel,
	services,
	skillGroups,
	skills,
	skillsIntro,
	toolboxLabel,
} from "../utils/constants";
import { revealDelay } from "../utils/motion";
import style from "../styles/skills.module.css";

export default function Skills() {
	return (
		<section id="stack" aria-labelledby="stack-title">
			<Diamond left="-0.4rem" />
			<Diamond right="-0.4rem" />
			<div className="container skills__container">
				<SectionLabel index="03">{skillsIntro.eyebrow}</SectionLabel>
				<div className={style.skills__intro} data-reveal>
					<h2 id="stack-title">{skillsIntro.heading}</h2>
					<p className="body-copy">{skillsIntro.summary}</p>
				</div>

				<div className={style.services} data-reveal>
					<h3 className={style.services__title}>{services.title}</h3>
					<ul className={style.services__list}>
						{services.items.map((service, i) => (
							<li
								key={service.title}
								className={style.services__item}
								data-spotlight
								data-hairline
								data-reveal
								style={revealDelay(i * 90)}
							>
								<span className={style.services__index} aria-hidden="true">
									{String(i + 1).padStart(2, "0")}
								</span>
								<h4 className={style.services__item_title}>{service.title}</h4>
								<p className={style.services__item_body}>{service.body}</p>
							</li>
						))}
					</ul>
				</div>

				<h3 className={style.skills__subheading}>{coreToolsLabel}</h3>
				<ul className={style.skills__list} aria-label={coreToolsLabel}>
					{skills.map((skill) => (
						<Skill key={skill.skill} skill={skill.skill} svg={skill.svg} />
					))}
				</ul>

				<div className={style.skills__groups}>
					<h3 className={style.skills__subheading}>{toolboxLabel}</h3>
					<div className={style.skills__group_grid}>
						{skillGroups.map((group, i) => (
							<div
								className={style.skills__group}
								key={group.label}
								data-reveal
								style={revealDelay(i * 80)}
							>
								<h4 className={style.skills__group_title}>{group.label}</h4>
								<ul className={style.skills__chips}>
									{group.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
