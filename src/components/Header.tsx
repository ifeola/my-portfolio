import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Diamond from "./Diamond";
import style from "../styles/header.module.css";

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const progressRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		let frame = 0;

		const update = () => {
			frame = 0;

			const maxScroll =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

			if (progressRef.current) {
				progressRef.current.style.transform = `scaleX(${progress})`;
			}

			setScrolled(window.scrollY > 16);
		};

		const onScroll = () => {
			if (frame) return;
			frame = requestAnimationFrame(update);
		};

		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);

		return () => {
			if (frame) cancelAnimationFrame(frame);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);

	return (
		<header className={style.header} data-scrolled={scrolled}>
			<div className={style.header__container}>
				<Diamond left="-0.4rem" />
				<Diamond right="-0.4rem" />
				<Logo />
				<Navigation />
			</div>
			<span ref={progressRef} className={style.header__progress} aria-hidden="true" />
		</header>
	);
}
