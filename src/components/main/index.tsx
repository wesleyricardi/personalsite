import style from "../../styles/components/main/index.module.css";
import AboutMe from "./aboutMe";
import Contact from "./contact";
import Portfolio from "./portfolio";
import Skills from "./skills";

export default function Main() {
  return (
    <main id="main" className={style.main}>
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
