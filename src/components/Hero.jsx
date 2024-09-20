import styles from "../styles/hero.module.css";
import Button from "./Button";
import { heroCopy, socialLinks } from "../utils/constants";
import Social from "./Social";
import Grid from "./Grid";
import Diamond from "./Diamond";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <Grid />
      <Diamond left="-0.4rem" />
      <Diamond right="-0.4rem" />
      <div className={styles.circle}></div>
      <div className="container">
        <h4 className="subtitle">Hello! I am Abayomi</h4>
        <h1 className={styles.hero__heading}>
          I build <span>web experiences</span> that inspire.
        </h1>
        <p className="body-copy">{heroCopy}</p>
        <div className={styles.hero__links}>
          <Button content="Send me a Mail" />
          <div className={styles.social__links}>
            <ul className={styles.social__list}>
              {socialLinks.map((socialLink, index) => {
                return (
                  <Social
                    content={socialLink.content}
                    link={socialLink.link}
                    key={index}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
