import style from "../../styles/components/main/portfolio.module.css";

export default function portfolio() {
  return (
    <section id="portfolio" className={style.main}>
      <h2>Meu portfólio</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes
      </p>
      <div>
        <picture>
          <img src="/main/portfolio/defaut.png" alt="" />
        </picture>
        <picture>
          <img src="/main/portfolio/defaut.png" alt="" />
        </picture>
        <picture>
          <img src="/main/portfolio/defaut.png" alt="" />
        </picture>
        <picture>
          <img src="/main/portfolio/defaut.png" alt="" />
        </picture>
      </div>
    </section>
  );
}
