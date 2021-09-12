import style from "../../styles/components/main/skills.module.css";
import Slide from "../extras/slide";

type Props = {
  skills: {
    title: string;
    text: string;
    list: {
      image: string;
      skill_name: string;
      seniority: { level: number; name: string };
    }[];
  };
};

export default function Skills({ skills }: Props) {
  return (
    <section id="skills" className={style.main}>
      <div>
        <h2>{skills.title}</h2>
        <p>{skills.text}</p>
        <div>
          <Slide name="skills">
            {[
              <ul className={style.skills + " " + style.pleno} key="skills_2">
                {skills.list.map((skill, index) => {
                  if (skill.seniority.level === 2)
                    return (
                      <li key={"skills_1_" + index}>
                        <img
                          width="34px"
                          src={skill.image}
                          alt={skill.skill_name}
                        />
                        {skill.skill_name}
                        <span>{skill.seniority.name}</span>
                      </li>
                    );
                })}
              </ul>,
              <ul className={style.skills + " " + style.pleno} key="skills_1">
                {skills.list.map((skill, index) => {
                  if (skill.seniority.level === 1)
                    return (
                      <li key={"skills_1_" + index}>
                        <img
                          width="34px"
                          src={skill.image}
                          alt={skill.skill_name}
                        />
                        {skill.skill_name}
                        <span>{skill.seniority.name}</span>
                      </li>
                    );
                })}
              </ul>,
            ]}
          </Slide>
        </div>
      </div>
    </section>
  );
}
