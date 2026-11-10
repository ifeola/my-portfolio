import { RESUME_PATH } from "../utils/constants";
import style from "../styles/resumebtn.module.css";

export default function ResumeBtn() {
	return (
		<a
			href={RESUME_PATH}
			className={style.resume__btn}
			download="Abayomi-Arogunmasa-CV.pdf"
			aria-label="Download Abayomi Arogunmasa's résumé (PDF)"
		>
			<span className={style.resume__btn_text}>Résumé</span>
		</a>
	);
}
