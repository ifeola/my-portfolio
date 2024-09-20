import Diamond from "./Diamond";
import Grid from "./Grid";
import style from "../styles/projects.module.css";
import data from "../utils/data";
import Project from "./Project";

export default function Projects() {
  return (
    <section className={style.projects} id="projects">
      <Grid />
      <Diamond left="-0.4rem" />
      <Diamond right="-0.4rem" />
      <div className="container">
        <h3 className="subtitle section-subtitle">Projects</h3>
        <h2>Check out my Projects</h2>
        <p className="body-copy">
          I'm excited to share my projects with you! As a web developer, I've
          been working on building a strong foundation in my skills. Here are
          some projects I've completed.
        </p>
        <div className={style.projects__content}>
          <ul className={style.project__list}>
            {data.map((item, index) => {
              return (
                <li className={style.project__item} key={index}>
                  <Project
                    image={`/src/assets/${item.image}`}
                    title={item.title}
                    description={item.description}
                    github={item.github}
                    link={item.link}
                    techs={item.techs}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
