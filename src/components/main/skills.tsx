import style from "../../styles/components/main/skills.module.css";
import Slide from "../extras/slide";

export default function skills() {
  return (
    <section id="skills" className={style.main}>
      <div>
        <h2>Minhas habilidades</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes
        </p>
        <div>
          <Slide name="skills">
            {[
              <ul
                className={style.skills + " " + style.pleno}
                key="skills_pleno"
              >
                <li>
                  <img
                    width="34px"
                    src="/main/skills_icon/html5.png"
                    alt="html 5"
                  />{" "}
                  HTML 5<span>Pleno</span>
                </li>

                <li>
                  <img
                    width="34px"
                    src="/main/skills_icon/ccs3.png"
                    alt="css 3"
                  />{" "}
                  CSS 3<span>Pleno</span>
                </li>
                <li>
                  <img
                    width="34px"
                    src="/main/skills_icon/php8.svg"
                    alt="php 8"
                  />{" "}
                  PHP 8<span>Pleno</span>
                </li>

                <li>
                  <img width="34px" src="/main/skills_icon/js.png" alt="JS" />{" "}
                  Javascript
                  <span>Pleno</span>
                </li>
                <li>
                  <img width="34px" src="/main/skills_icon/api.png" alt="API" />{" "}
                  API Rest
                  <span>Pleno</span>
                </li>
              </ul>,
              <ul
                className={style.skills + " " + style.junior}
                key="skills_junior"
              >
                <li>
                  <img
                    width="34px"
                    src="/main/skills_icon/node.svg"
                    alt="nodejs"
                  />{" "}
                  NodeJs
                  <span>Júnior</span>
                </li>
                <li>
                  <img
                    width="34px"
                    src="/main/skills_icon/next.png"
                    alt="nextjs"
                  />{" "}
                  NextJS
                  <span>Júnior</span>
                </li>
                <li>
                  <img
                    width="34px"
                    src="/main/skills_icon/react.svg"
                    alt="reactjs"
                  />{" "}
                  React JS
                  <span>Júnior</span>
                </li>
                <li>
                  <img
                    width="34px"
                    src="/main/skills_icon/typescript.svg"
                    alt="typescript"
                  />{" "}
                  Typescript
                  <span>Júnior</span>
                </li>

                <li>
                  <img width="34px" src="/main/skills_icon/sql.png" alt="SQL" />{" "}
                  SQL
                  <span>Júnior</span>
                </li>
              </ul>,
            ]}
          </Slide>
        </div>
      </div>
    </section>
  );
}
