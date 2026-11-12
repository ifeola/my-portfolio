import type { CSSProperties } from "react";

/** Staggers a `[data-reveal]` element without adding wrapper markup. */
export function revealDelay(milliseconds: number): CSSProperties {
	return { "--reveal-delay": `${milliseconds}ms` } as CSSProperties;
}
