import style from "../styles/logo.module.css";
import LogoOnly from "./LogoOnly";

export default function Logo() {
  return (
    <div className={style.logo__bg}>
      <LogoOnly />
      <h4>Codeit</h4>
    </div>
  );
}
