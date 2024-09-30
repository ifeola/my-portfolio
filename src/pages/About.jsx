import Diamond from "../components/Diamond";
import style from "../styles/about.module.css";
import avatar from "/assets/avatar.png";

export default function About() {
  return (
    <section className={style.about} id="about">
      <Diamond left="-0.4rem" />
      <Diamond right="-0.4rem" />
      <div className="container about__container">
        <div className={style.about__bg}>
          <div className={style.about__content}>
            <div className={style.about__content_left}>
              <h3 className={`subtitle ${style.section__subtitle}`}>
                About Me
              </h3>
              <p className={`body-copy ${style.about__copy}`}>
                My name is <span>Arogunmasa Abayomi</span>, a web developer with
                a strong foundation in HTML, CSS and Javascript, I've been
                building projects and learning from online resources, coding
                boot-camps, and personal experiment. I'm eager to apply my
                skills in real-world setting and continue learning from
                experienced professionals.
              </p>
              <p className="body-copy">
                I'm looking forward to connecting with like-minded individuals
                and exploring opportunities in web development.
              </p>
            </div>
            <div className={style.about__img_bg}>
              <img src={avatar} alt="avatar" className={style.about__img} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
