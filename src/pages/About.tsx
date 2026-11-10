import Diamond from "../components/Diamond";
import { about } from "../utils/constants";
import style from "../styles/about.module.css";

export default function About() {
	return (
		<section id="about" aria-labelledby="about-title">
			<Diamond left="-0.4rem" />
			<Diamond right="-0.4rem" />

			<div className="container about__container">
				<p className="subtitle section-subtitle">About</p>

				<div className={style.about__bg}>
					<div className={style.about__content}>
						<div className={style.about__content_left}>
							<h2 id="about-title" className={style.about__heading}>
								{about.heading}
							</h2>
							{about.paragraphs.map((paragraph) => (
								<p className="body-copy" key={paragraph}>
									{paragraph}
								</p>
							))}
						</div>

						<div className={style.about__img_bg}>
							<img
								src="/assets/avatar.svg"
								alt="Illustration of a developer working at a desk."
								className={style.about__img}
								width={787}
								height={572}
								loading="lazy"
								decoding="async"
							/>
						</div>
					</div>

					<dl className={style.about__facts}>
						{about.facts.map((fact) => (
							<div className={style.about__fact} key={fact.label}>
								<dt>{fact.label}</dt>
								<dd>{fact.value}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	);
}
