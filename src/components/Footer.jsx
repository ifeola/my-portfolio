import style from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.divider}>
        <div className={`container ${style.footer__container}`}>
          <div className={style.footer__items}>
            <span>Built by Arogunmasa Abayomi</span>
            <div>
              Copyright <span className="year"></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
