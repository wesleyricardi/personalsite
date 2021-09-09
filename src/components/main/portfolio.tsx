import style from "../../styles/components/main/portfolio.module.css";
import Slide from "../extras/slide";

export default function Portfolio() {
  return (
    <section id="portfolio" className={style.main}>
      <h2>Meu portfólio</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes
      </p>
      <div>
        <Slide name="portfolio">
          {[
            <div key="site exemplo 1" className={style.slide}>
              <picture>
                <img width="300px" src="/main/portfolio/defaut.png" alt="" />
              </picture>
              <div>
                <h3>Site exemplo 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa
                </p>
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                </ul>

                <button>Visitar</button>
              </div>{" "}
            </div>,
            <div key="site exemplo 2" className={style.slide}>
              <picture>
                <img width="300px" src="/main/portfolio/defaut.png" alt="" />
              </picture>
              <div>
                <h3>Site exemplo 2</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa
                </p>
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                </ul>

                <button>Visitar</button>
              </div>
            </div>,
            <div key="site exemplo 3" className={style.slide}>
              <picture>
                <img width="300px" src="/main/portfolio/defaut.png" alt="" />
              </picture>
              <div>
                <h3>Site exemplo 3</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa
                </p>
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                </ul>

                <button>Visitar</button>
              </div>
            </div>,
          ]}
        </Slide>
      </div>
    </section>
  );
}
