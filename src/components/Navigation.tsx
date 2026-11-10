import ResumeBtn from "./ResumeBtn";
import MenuBtn from "./MenuBtn";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { navLinks } from "../utils/constants";
import styles from "../styles/nav.module.css";

const sectionIds = navLinks.map((link) => link.id);

export default function Navigation() {
	const [open, setOpen] = useState(false);
	const activeId = useActiveSection(sectionIds);

	useEffect(() => {
		if (!open) return;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setOpen(false);
		};
		const handleResize = () => {
			if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
		};

		document.addEventListener("keydown", handleKeyDown);
		window.addEventListener("resize", handleResize);

		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("resize", handleResize);
		};
	}, [open]);

	return (
		<nav className={styles.nav} aria-label="Primary">
			<DesktopNav activeId={activeId} />
			<ResumeBtn />
			<MenuBtn open={open} setOpen={setOpen} />
			<MobileNav open={open} onClose={() => setOpen(false)} activeId={activeId} />
		</nav>
	);
}
