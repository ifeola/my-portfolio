import style from "../styles/footer.module.css";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className={style.footer}>
      <div className={style.divider}>
        <div className={`container ${style.footer__container}`}>
          <div className={style.footer__items}>
            <span>
              Built with ❤️ by <span className={style.name}>Abayomi A.</span>
            </span>
            <div>
              Copyright <span className={style.year}>{year}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
