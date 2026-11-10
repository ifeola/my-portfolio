import style from "../styles/diamond.module.css";

type DiamondProps = {
	right?: string;
	left?: string;
};

export default function Diamond({ right, left }: DiamondProps) {
	return (
		<div className={style.diamond} style={{ right, left }} aria-hidden="true" />
	);
}
