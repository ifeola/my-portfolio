import { useEffect } from "react";

/**
 * Tracks the pointer once and writes its position onto the hovered
 * `[data-spotlight]` element as `--spotlight-x` / `--spotlight-y`, so cards can
 * highlight under the cursor without each card owning a listener.
 */
export function useSpotlight() {
	useEffect(() => {
		const handleMove = (event: PointerEvent) => {
			const target = event.target as HTMLElement | null;
			const card = target?.closest?.("[data-spotlight]") as HTMLElement | null;

			if (!card) return;

			const rect = card.getBoundingClientRect();
			card.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
			card.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
		};

		window.addEventListener("pointermove", handleMove, { passive: true });

		return () => window.removeEventListener("pointermove", handleMove);
	}, []);
}
