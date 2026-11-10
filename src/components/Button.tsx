import type { ReactNode } from "react";
import ArrowRight from "./ArrowRight";
import style from "../styles/button.module.css";

type ButtonProps = {
	href: string;
	children: ReactNode;
	/** Primary uses the gradient; secondary uses the existing outline style. */
	variant?: "primary" | "secondary";
	/** Opens in a new tab with a safe rel. Detected automatically for http(s) links. */
	external?: boolean;
	download?: string;
	className?: string;
	onClick?: () => void;
	/** Full accessible name when the visible label needs project context. */
	ariaLabel?: string;
};

export default function Button({
	href,
	children,
	variant = "primary",
	external,
	download,
	className,
	onClick,
	ariaLabel,
}: ButtonProps) {
	const opensNewTab = external ?? /^https?:\/\//i.test(href);

	return (
		<a
			href={href}
			className={[style.cta, style[variant], className]
				.filter(Boolean)
				.join(" ")}
			{...(opensNewTab
				? { target: "_blank", rel: "noopener noreferrer" }
				: {})}
			{...(download ? { download } : {})}
			onClick={onClick}
			aria-label={ariaLabel}
		>
			<span className={style.cta__text}>{children}</span>
			<ArrowRight />
		</a>
	);
}
