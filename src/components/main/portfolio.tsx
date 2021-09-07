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
        <img src="/main/portfolio/defaut.png" alt="" />
        <img src="/main/portfolio/defaut.png" alt="" />
        <img src="/main/portfolio/defaut.png" alt="" />
        <img src="/main/portfolio/defaut.png" alt="" />
      </div>
    </section>
  );
}
