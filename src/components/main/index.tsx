import style from "../../styles/components/main/index.module.css";
import AboutMe from "./aboutMe";
import Skills from "./skills";
import Services from "./services";
import Portfolio from "./portfolio";
import Contact from "./contact";
import { main } from "../../language/interface";

type Props = {
  main: main;
};

export default function Main({
  main: { aboutMe, skills, services, portfolio, contact },
}: Props) {
  return (
    <main id="main" className={style.main}>
      <AboutMe aboutMe={aboutMe} />
      <Skills skills={skills} />
      <Services services={services} />
      <Portfolio portfolio={portfolio} />
      <Contact contact={contact} />
    </main>
  );
}
