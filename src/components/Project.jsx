import Social from "./Social";
import style from "../styles/project.module.css";

export default function Project({
  image,
  title,
  description,
  techs,
  github,
  demo,
}) {
  return (
    <li className={style.project}>
      <div className={style.project__image}>
        <img src={image} alt={`${title} image`} />
      </div>
      <div className={style.project__content}>
        <div className={style.project__content_top}>
          <a
            href="https://abayome-todo.netlify.app/"
            target="_blank"
            className={style.project__link}>
            <h4>{title}</h4>
          </a>
          <p className={style.project__desc}>{description}</p>
          <div className={style.project__technologies}>
            {techs.map((tech, index) => {
              return <span key={index}>{tech}</span>;
            })}
          </div>
        </div>
        <div className={style.project__links}>
          <Social content="Github" link={github} />
          <Social content="Live" link={demo} />
        </div>
      </div>
    </li>
  );
}
