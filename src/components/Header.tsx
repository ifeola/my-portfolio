import Logo from "./Logo";
import Navigation from "./Navigation";
import Diamond from "./Diamond";
import style from "../styles/header.module.css";

export default function Header() {
	return (
		<header className={style.header}>
			<div className={style.header__container}>
				<Diamond left="-0.4rem" />
				<Diamond right="-0.4rem" />
				<Logo />
				<Navigation />
			</div>
		</header>
	);
}
