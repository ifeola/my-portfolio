import ArrowRightTop from "./ArrowRIghtTop";
import style from "../styles/social.module.css";

type SocialProps = {
	content: string;
	link: string;
	/** Use when the visible label alone is ambiguous out of context. */
	ariaLabel?: string;
};

export default function Social({ content, link, ariaLabel }: SocialProps) {
	const opensNewTab = /^https?:\/\//i.test(link);

	return (
		<a
			href={link}
			className={style.social__link}
			aria-label={ariaLabel}
			{...(opensNewTab
				? { target: "_blank", rel: "noopener noreferrer" }
				: {})}
		>
			<span>{content}</span>
			<ArrowRightTop />
		</a>
	);
}
