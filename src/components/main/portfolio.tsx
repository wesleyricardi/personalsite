import style from "../../styles/components/main/portfolio.module.css";
import Slide from "../extras/slide";

type Props = {
  portfolio: {
    title: string;
    text: string;
    projects: {
      name: string;
      photo: string;
      stage: { text: string; percent: string };
      description: string;
      list: string[];
      link: string;
    }[];
    buttonVisit: string;
  };
};

export default function Portfolio({ portfolio }: Props) {
  return (
    <section id="portfolio" className={style.main}>
      <h2>{portfolio.title}</h2>
      <p>{portfolio.text}</p>
      <div>
        <Slide name="portfolio">
          {portfolio.projects.map((project, index) => (
            <div key={"project_" + index} className={style.slide}>
              <picture>
                <a href={project.link}>
                  <img width="300px" src={project.photo} alt="" />
                </a>
              </picture>

              <div>
                <h3>{project.name} </h3>
                <p>{project.description}</p>
                <ul>
                  {project.list.map((list, i) => (
                    <li key={index + "_list_" + i}>{list}</li>
                  ))}
                </ul>
                <div>
                  {project.stage.text} - <span>{project.stage.percent}</span>
                </div>
                <a href={project.link}>
                  <button>{portfolio.buttonVisit}</button>
                </a>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
}
