import style from "../../styles/components/main/portfolio.module.css";
import useResize from "../extras/useOnResize";

export default function portfolio() {
  useResize(() => handleArrowSlide("stabilize"));

  function handleSlide(e: any): void {
    e.preventDefault();
    const slide = document.getElementById(
      e.target.getAttribute("href").slice(1)
    ) as HTMLElement;
    const container = slide.parentElement as HTMLElement;
    const scrollPosition = slide.offsetLeft - container.offsetLeft;
    (container.parentElement as HTMLElement).scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }

  function handleArrowSlide(direction: string): void {
    const container = document.getElementById(
      "container_portfolio_slide"
    ) as HTMLElement;
    const slide = document.getElementById("portfolio_slide") as HTMLElement;
    const slideNumber = slide.childElementCount;
    const slideWidth = container.offsetWidth;
    const slidePosition = container.scrollLeft;
    let pages: number[] = [];

    for (let i = 0; i < slideNumber; i++) {
      pages[i] = slideWidth * (i + 1) - slideWidth;
    }

    pages.map((page, index) => {
      const pageNumber = index + 1;

      if (
        slidePosition >= page - slideWidth / 2 &&
        slidePosition <= page + slideWidth / 2
      ) {
        if (direction === "left") {
          if (pageNumber === 1)
            container.scrollTo({
              left: pages[pages.length - 1],
              behavior: "smooth",
            });
          else
            container.scrollTo({ left: pages[index - 1], behavior: "smooth" });
        } else if (direction === "right") {
          if (pageNumber === pages.length)
            container.scrollTo({ left: pages[0], behavior: "smooth" });
          else
            container.scrollTo({ left: pages[index + 1], behavior: "smooth" });
        } else if (direction === "stabilize") {
          container.scrollTo({ left: pages[index], behavior: "auto" });
        }
      }
    });
  }

  return (
    <section id="portfolio" className={style.main}>
      <h2>Meu portfólio</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes
      </p>
      <div>
        <div id="container_portfolio_slide">
          <div id="portfolio_slide">
            <section id="portfolio1">
              <picture>
                <img src="/main/portfolio/defaut.png" alt="" />
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
              </div>
            </section>
            <section id="portfolio2">
              <picture>
                <img src="/main/portfolio/defaut.png" alt="" />
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
            </section>
            <section id="portfolio3">
              <picture>
                <img src="/main/portfolio/defaut.png" alt="" />
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
            </section>
          </div>
        </div>
        <div className={style.eclipse}>
          <a onClick={handleSlide} href="#portfolio1" />
          <a onClick={handleSlide} href="#portfolio2" />
          <a onClick={handleSlide} href="#portfolio3" />
        </div>

        <span
          onClick={() => handleArrowSlide("left")}
          className={"arrow " + style.arrowleft}
        ></span>
        <span
          onClick={() => handleArrowSlide("right")}
          className={"arrow " + style.arrowright}
        ></span>
      </div>
    </section>
  );
}
