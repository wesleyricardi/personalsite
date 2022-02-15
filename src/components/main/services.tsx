import style from "../../styles/components/main/services.module.css";

type Props = {
  services: {
    title: string;
    text: string;
    list: {
      image: string;
      title: string;
      description: string;
    }[];
  };
};

export default function Services({ services }: Props) {
  return (
    <section id="services" className={style.main}>
      <h2>{services.title}</h2>
      <p>{services.text}</p>
      <div>
        {services.list.map((service, key) => (
          <div key={key}>
            <img height="50px" src={service.image} alt="" />
            <h4>{service.title}</h4>
            <h5>{service.description}</h5>
          </div>
        ))}
      </div>
    </section>
  );
}
