import LogoImage from "../assets/logo.svg";
import style from "../styles/logo.module.css";

export default function Logo() {
  return (
    <div className={style.logo}>
      <img src={LogoImage} alt="Logo Image" />
    </div>
  );
}
