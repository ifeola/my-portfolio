import { useEffect, useState } from "react";

/**
 * Highlights the nav link for the section currently crossing the middle of
 * the viewport. Uses one observer for all sections instead of a scroll
 * listener, so it does not trigger a render on every scroll event.
 */
export function useActiveSection(ids: readonly string[]): string {
	const [activeId, setActiveId] = useState("");

	useEffect(() => {
		if (typeof IntersectionObserver === "undefined") return;

		const sections = ids
			.map((id) => document.getElementById(id))
			.filter((section): section is HTMLElement => section !== null);

		if (sections.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visible[0]) setActiveId(visible[0].target.id);
			},
			{ rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, [ids]);

	return activeId;
}
