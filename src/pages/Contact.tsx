import Diamond from "../components/Diamond";
import Button from "../components/Button";
import Social from "../components/Social";
import CopyEmail from "../components/CopyEmail";
import SectionLabel from "../components/SectionLabel";
import { revealDelay } from "../utils/motion";
import {
	EMAIL,
	RESUME_PATH,
	contact,
	mailtoLink,
	socialLinks,
} from "../utils/constants";
import style from "../styles/contact.module.css";

export default function Contact() {
	return (
		<section id="contact" aria-labelledby="contact-title">
			<Diamond left="-0.4rem" />
			<Diamond right="-0.4rem" />

			<div className="container">
				<SectionLabel index="04">{contact.eyebrow}</SectionLabel>

				<div className={style.contact__content}>
					<div className={style.contact__intro} data-reveal>
						<h2 id="contact-title">{contact.heading}</h2>
						<p className="body-copy">{contact.body}</p>

						<div className={style.contact__actions}>
							<Button href={contact.primary.href}>
								{contact.primary.label}
							</Button>
							<Button
								href={contact.secondary.href}
								variant="secondary"
								external
							>
								{contact.secondary.label}
							</Button>
						</div>

						<ul className={style.contact__availability}>
							{contact.availability.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>

					<aside
						className={style.contact__card}
						aria-label="Contact details"
						data-reveal
						style={revealDelay(120)}
					>
						<p className={style.contact__label}>Email</p>
						<a href={mailtoLink("Project enquiry — Forgentik")} className={style.contact__email}>
							{EMAIL}
						</a>
						<CopyEmail />

						<div className={style.contact__divider} aria-hidden="true" />

						<p className={style.contact__label}>Elsewhere</p>
						<ul className={style.contact__socials}>
							{socialLinks.map((social) => (
								<li key={social.content}>
									<Social
										content={social.content}
										link={social.link}
										ariaLabel={`${social.content} profile (opens in a new tab)`}
									/>
								</li>
							))}
						</ul>

						<div className={style.contact__divider} aria-hidden="true" />

						<p className={style.contact__resume}>
							Prefer a summary?{" "}
							<a
								href={RESUME_PATH}
								download="Abayomi-Arogunmasa-CV.pdf"
								aria-label="Download my résumé — Abayomi Arogunmasa (PDF)"
							>
								Download my résumé
							</a>
						</p>
					</aside>
				</div>
			</div>
		</section>
	);
}
