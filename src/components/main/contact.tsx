import style from "../../styles/components/main/contact.module.css";

type Props = {
  contact: {
    title: string;
    text: string;
    phone: string;
    number: string;
    email: string;
    linkedin: string;
    github: string;
    whatsapp: string;
    form: {
      name: string;
      email: string;
      message: string;
      button: string;
    };
  };
};

export default function Contact({ contact }: Props) {
  return (
    <section id="contact" className={style.main}>
      <h2>{contact.title}</h2>
      <p>{contact.title}</p>
      <div>
        <div className={style.social}>
          <a href={contact.whatsapp}>
            <img
              height="40px"
              width="40px"
              src="/social_imgs/whatsapp.svg"
              alt=""
            />
          </a>
          <a href={contact.linkedin}>
            <img
              height="40px"
              width="40px"
              src="/social_imgs/linkedin.svg"
              alt=""
            />
          </a>
          <a href={contact.github}>
            <img
              height="40px"
              width="40px"
              src="/social_imgs/github.svg"
              alt=""
            />
          </a>
        </div>
        <div className={style.contact}>
          <div className={style.tel_email}>
            <div>
              <img
                height="40px"
                width="40px"
                src="/svgs/phone.svg"
                alt="phone icon"
              />
              <div>
                <h4>{contact.phone}</h4>
                <span>{contact.number}</span>
              </div>
            </div>
            <span>
              <span />
            </span>
            <div>
              <img
                height="40px"
                width="40px"
                src="/svgs/email.svg"
                alt="phone icon"
              />
              <div>
                <h4>E-mail</h4>
                <span>{contact.email}</span>
              </div>
            </div>
          </div>
          <form action="">
            <input
              type="text"
              name="name"
              id="name"
              placeholder={contact.form.name}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder={contact.form.email}
            />
            <textarea
              name="texto"
              id="texto"
              cols={30}
              placeholder={contact.form.message}
              rows={10}
            ></textarea>
            <div>
              <button>{contact.form.button}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
