import styles from "../styles/hero.module.css";
import Button from "./Button";
import { HERO_COPY, socialLinks } from "../utils/constants";
import Social from "./Social";
import Grid from "./Grid";
import Diamond from "./Diamond";
import LogoOnly from "./LogoOnly";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollHeight, setScrollHeight] = useState(0);

  function onScroll() {
    setScrollHeight((prevValue) => (prevValue = window.scrollY));
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <section className={styles.hero} id="hero">
      <Grid />
      <Diamond left="-0.4rem" />
      <Diamond right="-0.4rem" />
      <div className={styles.circle}></div>
      <a
        href="#hero"
        className={`${styles.logo__roll} ${
          scrollHeight > 500 ? styles.scroll__active : ""
        }`}>
        <LogoOnly />
      </a>
      <div className="container">
        <h4 className="subtitle">Hello! I am Abayomi</h4>
        <h1 className={styles.hero__heading}>
          I build <span>web experiences</span> that inspire.
        </h1>
        <p className="body-copy">{HERO_COPY}</p>
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
