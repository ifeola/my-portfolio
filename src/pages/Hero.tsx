import { useEffect, useRef, useState } from "react";
import Diamond from "../components/Diamond";
import LogoOnly from "../components/LogoOnly";
import Button from "../components/Button";
import Social from "../components/Social";
import { hero, socialLinks } from "../utils/constants";
import style from "../styles/hero.module.css";

export default function Hero() {
	const [showBackToTop, setShowBackToTop] = useState(false);
	const sentinelRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const sentinel = sentinelRef.current;
		if (!sentinel || typeof IntersectionObserver === "undefined") return;

		const observer = new IntersectionObserver(
			([entry]) => setShowBackToTop(entry.isIntersecting),
			{ threshold: 0 },
		);

		observer.observe(sentinel);
		return () => observer.disconnect();
	}, []);

	return (
		<section className={style.hero} id="hero" aria-labelledby="hero-title">
			<Diamond left="-0.4rem" />
			<Diamond right="-0.4rem" />
			<div className={style.circle} aria-hidden="true" />

			<div className="container">
				<p className="subtitle">{hero.eyebrow}</p>

				<div className={style.hero__wrapper}>
					<h1 className={style.hero__heading} id="hero-title">
						{hero.titleLead}
						<span>{hero.titleAccent}</span>
					</h1>

					<div className={style.hero__content}>
						<p className="body-copy">{hero.summary}</p>

						<ul className={style.hero__proof}>
							{hero.proof.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>

						<div className={style.hero__links}>
							<Button href={hero.primary.href}>{hero.primary.label}</Button>
							<Button href={hero.secondary.href} variant="secondary">
								{hero.secondary.label}
							</Button>
						</div>

						<ul className={style.social__list} aria-label="Social profiles">
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
					</div>
				</div>
			</div>

			<div ref={sentinelRef} className={style.hero__sentinel} aria-hidden="true" />

			<a
				href="#hero"
				className={`${style.logo__roll} ${
					showBackToTop ? style.scroll__active : ""
				}`}
				aria-label="Back to top"
				aria-hidden={!showBackToTop}
				tabIndex={showBackToTop ? 0 : -1}
			>
				<LogoOnly />
			</a>
		</section>
	);
}
