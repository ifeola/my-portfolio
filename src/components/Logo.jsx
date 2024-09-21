import LogoImage from "/assets/logo1.svg";
import style from "../styles/logo.module.css";

export default function Logo() {
  return (
    <div className={style.logo__bg}>
      <img className={style.logo} src={LogoImage} alt="Logo Image" />
      <h4>CodeBreaker</h4>
    </div>
  );
}
