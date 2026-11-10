import type { CaseStudy } from "../utils/data";
import ArrowRightTop from "./ArrowRIghtTop";
import style from "../styles/project.module.css";

type ProjectProps = {
	project: CaseStudy;
};

export default function Project({ project }: ProjectProps) {
	const {
		id,
		index,
		title,
		tagline,
		problem,
		solution,
		challenge,
		stack,
		status,
		image,
		demo,
		repo,
		note,
	} = project;

	return (
		<li className={style.project}>
			<article className={style.project__grid} aria-labelledby={`${id}-title`}>
				<div className={style.project__media}>
					{image ? (
						<img
							src={image.src}
							alt={image.alt}
							width={image.width}
							height={image.height}
							loading="lazy"
							decoding="async"
						/>
					) : (
						<div className={style.project__cover} aria-hidden="true">
							<span className={style.project__cover_index}>{index}</span>
							<span className={style.project__cover_title}>{title}</span>
						</div>
					)}
					<span className={style.project__status} data-status={status}>
						{status}
					</span>
				</div>

				<div className={style.project__content}>
					<p className={style.project__index} aria-hidden="true">
						{index}
					</p>
					<h3 className={style.project__title} id={`${id}-title`}>
						{title}
					</h3>
					<p className={style.project__tagline}>{tagline}</p>

					<dl className={style.project__facts}>
						<div className={style.project__fact}>
							<dt>Problem</dt>
							<dd>{problem}</dd>
						</div>
						<div className={style.project__fact}>
							<dt>Solution</dt>
							<dd>{solution}</dd>
						</div>
					</dl>

					<div className={style.project__challenge}>
						<p className={style.project__challenge_label}>Key challenge</p>
						<h4 className={style.project__challenge_title}>
							{challenge.title}
						</h4>
						<p className={style.project__challenge_body}>{challenge.body}</p>
					</div>

					<ul
						className={style.project__stack}
						aria-label={`${title} tech stack`}
					>
						{stack.map((tech) => (
							<li key={tech}>{tech}</li>
						))}
					</ul>

					<div className={style.project__links}>
						{demo ? (
							<a
								href={demo}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Live demo of ${title} (opens in a new tab)`}
							>
								Live demo
								<ArrowRightTop />
							</a>
						) : null}
						{repo ? (
							<a
								href={repo}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Source code for ${title} (opens in a new tab)`}
							>
								Source code
								<ArrowRightTop />
							</a>
						) : null}
					</div>

					{note ? <p className={style.project__note}>{note}</p> : null}
				</div>
			</article>
		</li>
	);
}
