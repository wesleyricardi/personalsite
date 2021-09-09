import { useEffect, useState } from "react";
import style from "../../styles/components/extra/slide.module.css";

type Props = {
  name: string;
  children: JSX.Element[];
};

type handleSlide = "left" | "right" | "stabilize";

export default function Slide({ name, children }: Props) {
  const [actualSlide, setActualSlide] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("resize", () => handleSlide("stabilize"));
    return () =>
      window.removeEventListener("resize", () => handleSlide("stabilize"));
  }, [actualSlide]);

  function getElements(index: number = 0): {
    container: HTMLElement;
    slide: HTMLElement;
  } {
    const slide = document.getElementById(
      name + "_slide_" + index
    ) as HTMLElement;
    const container = slide.parentElement as HTMLElement;
    return { container, slide };
  }

  function getSlidePosition(index: number): number {
    const { container, slide } = getElements(index);
    return slide.offsetLeft - container.offsetLeft;
  }

  function changeSlide(
    newPosition: number,
    behavior: ScrollBehavior = "auto"
  ): void {
    const { container } = getElements(0);

    (container.parentElement as HTMLElement).scrollTo({
      left: newPosition,
      behavior,
    });
  }

  function handleNavSlide(index: number): void {
    const slidePosition = getSlidePosition(index);
    changeSlide(slidePosition, "smooth");
    setActualSlide(index);
  }

  function handleSlide(direction: handleSlide): void {
    const lastSlide = children.length - 1;

    if (direction === "left") {
      if (actualSlide === 0) {
        const lastSlidePosition = getSlidePosition(lastSlide);
        changeSlide(lastSlidePosition, "smooth");
        setActualSlide(lastSlide);
      } else {
        const previuslySlidePosition = getSlidePosition(actualSlide - 1);
        changeSlide(previuslySlidePosition, "smooth");
        setActualSlide(actualSlide - 1);
      }
    } else if (direction === "right") {
      if (actualSlide === lastSlide) {
        const firstSlidePosition = getSlidePosition(0);
        changeSlide(firstSlidePosition, "smooth");
        setActualSlide(0);
      } else {
        const nextSlidePosition = getSlidePosition(actualSlide + 1);
        changeSlide(nextSlidePosition, "smooth");
        setActualSlide(actualSlide + 1);
      }
    } else if (direction === "stabilize") {
      const actualSlidePosition = getSlidePosition(actualSlide);
      changeSlide(actualSlidePosition, "auto");
    }
  }

  return (
    <div data-slide={name} className={style.main}>
      <div>
        <div>
          {children.map((element, index) => (
            <section
              key={name + "_slide_" + index}
              id={name + "_slide_" + index}
            >
              {element}
            </section>
          ))}
        </div>
      </div>
      <div data-nav="container" className={style.eclipse}>
        {children.map((element, index) => (
          <span
            data-nav="eclipses"
            onClick={(e) => handleNavSlide(index)}
            style={actualSlide === index ? { opacity: "1" } : {}}
            key={"navSlide_" + index}
          />
        ))}
      </div>
      <span
        data-nav="arrow-left"
        onClick={() => handleSlide("left")}
        className={style.arrow + " " + style.left}
      ></span>
      <span
        data-nav="arrow-right"
        onClick={() => handleSlide("right")}
        className={style.arrow + " " + style.right}
      ></span>
    </div>
  );
}
