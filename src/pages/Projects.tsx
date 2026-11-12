import Diamond from "../components/Diamond";
import Project from "../components/Project";
import SectionLabel from "../components/SectionLabel";
import { caseStudies } from "../utils/data";
import { projectsIntro } from "../utils/constants";
import style from "../styles/projects.module.css";

export default function Projects() {
	return (
		<section id="work" aria-labelledby="work-title">
			<Diamond left="-0.4rem" />
			<Diamond right="-0.4rem" />
			<div className="container">
				<SectionLabel index="01">{projectsIntro.eyebrow}</SectionLabel>
				<div className={style.projects__intro} data-reveal>
					<h2 id="work-title">{projectsIntro.heading}</h2>
					<p className="body-copy">{projectsIntro.summary}</p>
				</div>
				<ol className={style.project__list}>
					{caseStudies.map((project) => (
						<Project key={project.id} project={project} />
					))}
				</ol>
			</div>
		</section>
	);
}
