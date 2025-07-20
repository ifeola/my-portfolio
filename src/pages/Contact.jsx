import { CONTACT_COPY, socialLinks } from "../utils/constants";
import styles from "../styles/hero.module.css";
import style from "../styles/contact.module.css";
import Social from "../components/Social";
import Button from "../components/Button";
import Diamond from "../components/Diamond";

export default function Contact() {
  return (
    <section id="contact">
      <Diamond left="-0.4rem" />
      <Diamond right="-0.4rem" />
      <div className="container">
        <h4 className="subtitle section-subtitle">Contact Me</h4>
        <div className={style.contact__content}>
          <h2>Get In Touch</h2>
          <p className="body-copy">{CONTACT_COPY}</p>
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
      </div>
    </section>
  );
}
