import type { ReactNode } from "react";

type SectionLabelProps = {
	index: string;
	children: ReactNode;
};

export default function SectionLabel({ index, children }: SectionLabelProps) {
	return (
		<p className="subtitle">
			<span className="subtitle__index" aria-hidden="true">
				{index}
			</span>
			<span>{children}</span>
		</p>
	);
}
