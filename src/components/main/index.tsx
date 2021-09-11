import style from "../../styles/components/main/index.module.css";
import AboutMe from "./aboutMe";
import Contact from "./contact";
import Portfolio from "./portfolio";
import Skills from "./skills";
import { main } from "../../language/interface";

type Props = {
  main: main;
};

export default function Main({
  main: { aboutMe, skills, portfolio, contact },
}: Props) {
  return (
    <main id="main" className={style.main}>
      <AboutMe aboutMe={aboutMe} />
      <Skills skills={skills} />
      <Portfolio portfolio={portfolio} />
      <Contact contact={contact} />
    </main>
  );
}
