import Diamond from "../components/Diamond";
import Project from "../components/Project";
import { caseStudies } from "../utils/data";
import { projectsIntro } from "../utils/constants";
import style from "../styles/projects.module.css";

export default function Projects() {
	return (
		<section id="work" aria-labelledby="work-title">
			<Diamond left="-0.4rem" />
			<Diamond right="-0.4rem" />
			<div className="container">
				<p className="subtitle">{projectsIntro.eyebrow}</p>
				<div className={style.projects__intro}>
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
