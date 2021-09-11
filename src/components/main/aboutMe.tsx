import style from "../../styles/components/main/aboutMe.module.css";

type Props = {
  aboutMe: {
    photo: string;
    title: string;
    text: string;
  };
};

export default function aboutMe({ aboutMe }: Props) {
  return (
    <section id="aboutme" className={style.main}>
      <img
        width="150px"
        src={aboutMe.photo}
        alt="Wesley Ricardi profile photo"
      />
      <h2>{aboutMe.title}</h2>
      <p>{aboutMe.text}</p>
    </section>
  );
}
