import { useEffect, useState } from "react";
import style from "../../styles/components/header/index.module.css";

type Props = {
  header: {
    welcome: string;
    title: string;
    text: string;
  };
};
export default function Header({ header }: Props) {
  const [welcome, setWelcome] = useState<string>("");

  useEffect(() => {
    const letters = header.welcome.split("");

    letters.map((letter, index) => {
      setTimeout(() => setWelcome((state) => state + letter), 50 * index);
    });

    setTimeout(() => {
      document
        .querySelectorAll("[data-transition='header']")
        .forEach((element) => {
          const htmlElement = element as HTMLElement;
          htmlElement.removeAttribute("style");
        });
    }, 100 * letters.length);
  }, []);

  return (
    <header id="header" className={style.main}>
      <div>
        <h1>{welcome}</h1>
        <h2
          data-transition="header"
          style={{ opacity: 0, transform: "scale(0.7)" }}
        >
          {header.title}
        </h2>
        <p
          data-transition="header"
          style={{ opacity: 0, transform: "scale(0.3)" }}
        >
          {header.text}
        </p>
      </div>
    </header>
  );
}
