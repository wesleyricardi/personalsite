import style from "../../styles/components/main/aboutMe.module.css";

export default function aboutMe() {
  return (
    <section className={style.main}>
      <img src="/main/profile_photo.jfif" alt="Wesley Ricardi profile photo" />
      <h2>
        Esse sou eu, apaixado por programação <b>&</b> tecnologia
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </p>
    </section>
  );
}
