import { useEffect, useRef, useState } from "react";
import { EMAIL } from "../utils/constants";
import style from "../styles/contact.module.css";

function fallbackCopy(text: string) {
	const field = document.createElement("textarea");
	field.value = text;
	field.setAttribute("readonly", "");
	field.style.position = "fixed";
	field.style.opacity = "0";
	document.body.appendChild(field);
	field.select();

	try {
		document.execCommand("copy");
	} finally {
		field.remove();
	}
}

export default function CopyEmail() {
	const [copied, setCopied] = useState(false);
	const timeout = useRef<number>();

	useEffect(() => {
		return () => {
			if (timeout.current) window.clearTimeout(timeout.current);
		};
	}, []);

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(EMAIL);
		} catch {
			fallbackCopy(EMAIL);
		}

		setCopied(true);
		if (timeout.current) window.clearTimeout(timeout.current);
		timeout.current = window.setTimeout(() => setCopied(false), 2000);
	}

	return (
		<>
			<button
				type="button"
				className={style.copy}
				data-copied={copied}
				onClick={copyEmail}
			>
				{copied ? "Copied" : "Copy email"}
			</button>
			<span role="status" className="sr-only">
				{copied ? "Email address copied to clipboard." : ""}
			</span>
		</>
	);
}
