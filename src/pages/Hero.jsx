import styles from "../styles/hero.module.css";
import Button from "../components/Button";
import { HERO_COPY, socialLinks } from "../utils/constants";
import Social from "../components/Social";
import Diamond from "../components/Diamond";
import LogoOnly from "../components/LogoOnly";
import { useEffect, useState } from "react";

export default function Hero() {
	const [scrollHeight, setScrollHeight] = useState(0);

	function onScroll() {
		setScrollHeight((prevValue) => (prevValue = window.scrollY));
	}

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	});

	return (
		<section className={styles.hero} id="hero">
			<Diamond left="-0.4rem" />
			<Diamond right="-0.4rem" />
			<div className={styles.circle}></div>
			<a
				href="#hero"
				className={`${styles.logo__roll} ${
					scrollHeight > 500 ? styles.scroll__active : ""
				}`}>
				<LogoOnly />
			</a>
			<div className="container">
				<h4 className="subtitle">Hello! I am Abayomi</h4>
				<div className={styles.hero__wrapper}>
					<h1 className={styles.hero__heading}>
						I build <span>web experiences</span> that inspire.
					</h1>
					<div className={styles.hero__content}>
						<p className="body-copy">{HERO_COPY}</p>
						<div className={styles.hero__links}>
							<Button content="Send me a Mail" />
							<div className={styles.social__links}>
								<ul className={styles.social__list}>
									{socialLinks.map((socialLink, index) => {
										return (
											<Social
												content={socialLink.content}
												link={socialLink.link}
												key={index}
											/>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
