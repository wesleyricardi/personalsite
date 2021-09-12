import { useEffect, useState } from "react";
import style from "../../styles/components/extra/slide.module.css";

type Props = {
  name: string;
  children: JSX.Element[];
  options?: {
    arrowVisible: "auto" | "always" | "never";
  };
};

export default function Slide({
  name,
  children,
  options = { arrowVisible: "auto" },
}: Props) {
  const [actualSlide, setActualSlide] = useState<number>(0);
  const [arrowsVisible, setArrowsVisible] = useState<{
    left: boolean;
    right: boolean;
  }>({ left: false, right: true });

  const [clickPosition, setClickPosition] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("resize", () => handleNavSlide(actualSlide));
    return () =>
      window.removeEventListener("resize", () => handleNavSlide(actualSlide));
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
    const lastSlide = children.length - 1;

    if (index === actualSlide) {
      const actualSlidePosition = getSlidePosition(actualSlide);
      changeSlide(actualSlidePosition, "auto");
    } else {
      if (index < 0) {
        const lastSlidePosition = getSlidePosition(lastSlide);
        changeSlide(lastSlidePosition, "smooth");
        setActualSlide(lastSlide);
      } else if (index > lastSlide) {
        const firstSlidePosition = getSlidePosition(0);
        changeSlide(firstSlidePosition, "smooth");
        setActualSlide(0);
      } else {
        const slidePosition = getSlidePosition(index);
        changeSlide(slidePosition, "smooth");
        setActualSlide(index);
      }

      if (index === 0 || index > lastSlide) {
        setArrowsVisible({ left: false, right: true });
      } else if (index === lastSlide || index < 0) {
        setArrowsVisible({ left: true, right: false });
      } else {
        setArrowsVisible({ left: true, right: true });
      }
    }
  }

  function Arrows() {
    function Left({ visible }: { visible?: "always" }) {
      const { left: leftVisible } = arrowsVisible;
      if (visible === "always" || leftVisible)
        return (
          <span
            data-nav="arrow-left"
            onClick={(e) => handleNavSlide(actualSlide - 1)}
            className={style.arrow + " " + style.left}
          ></span>
        );
      else return null;
    }

    function Right({ visible }: { visible?: "always" }) {
      const { right: rightVisible } = arrowsVisible;
      if (visible === "always" || rightVisible)
        return (
          <span
            data-nav="arrow-right"
            onClick={(e) => handleNavSlide(actualSlide + 1)}
            className={style.arrow + " " + style.right}
          ></span>
        );
      else return null;
    }

    if (options.arrowVisible === "auto") {
      return (
        <>
          <Left />
          <Right />
        </>
      );
    }

    if (options.arrowVisible === "always")
      return (
        <>
          <Left visible="always" />
          <Right visible="always" />
        </>
      );
    else return null;
  }

  function Swipe(mousePosition: number, element: HTMLElement) {
    if (clickPosition && scrollPosition >= 0) {
      element.scrollTo({
        left: (mousePosition - clickPosition) * -1 + scrollPosition,
        behavior: "auto",
      });
    }
  }

  let lastTouchPosition: number;
  function SwipeTo(clickoutPosition: number) {
    const lastSlide = children.length - 1;

    if (clickPosition) {
      const mouseMove = clickoutPosition - clickPosition;
      if (mouseMove) {
        if (mouseMove < -100) {
          if (actualSlide + 1 <= lastSlide) {
            handleNavSlide(actualSlide + 1);
          }
        } else if (mouseMove > 100) {
          if (actualSlide - 1 >= 0) {
            handleNavSlide(actualSlide - 1);
          }
        } else {
          const actualSlidePosition = getSlidePosition(actualSlide);
          changeSlide(actualSlidePosition, "smooth");
        }
      }
    }
    setClickPosition(0);
  }

  return (
    <div data-slide={name} className={style.main}>
      <div
        onMouseDown={(e) => {
          setClickPosition(e.clientX),
            setScrollPosition(e.currentTarget.scrollLeft);
        }}
        onMouseUp={(e) => SwipeTo(e.clientX)}
        onMouseMove={(e) => Swipe(e.clientX, e.currentTarget)}
        onMouseLeave={() => SwipeTo(clickPosition + 10)}
        onTouchStart={(e) => {
          setClickPosition(e.touches[0].screenX),
            setScrollPosition(e.currentTarget.scrollLeft);
        }}
        onTouchEnd={(e) => SwipeTo(lastTouchPosition)}
        onTouchMove={(e) => {
          Swipe(e.touches[0].screenX, e.currentTarget);
          lastTouchPosition = e.touches[0].screenX;
        }}
        onTouchCancel={() => SwipeTo(clickPosition + 10)}
      >
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
      <Arrows />
    </div>
  );
}
