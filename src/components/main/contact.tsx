import style from "../../styles/components/main/contact.module.css";
import { useForm } from "react-hook-form";

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

type Data = {
  name: string;
  email: string;
  body: string;
};

export default function Contact({ contact }: Props) {
  const { register, handleSubmit, reset } = useForm();

  function handleSend({ email, name, body }: Data) {
    try {
      fetch(`https://wesleyricardi.com/wrdev/api/send_email`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, name, body }),
      }).then(
        (res) => {
          if (res.status === 200) {
            alert("E-mail enviado com sucesso!");
            reset({
              name: "",
              email: "",
              body: "",
            });
          } else alert("Falha no envio do e-mail!");
        },
        () => alert("falha no enviao do e-mail!")
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section id="contact" className={style.main}>
      <h2>{contact.title}</h2>
      <p>{contact.text}</p>
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
          <a href={"tel:" + contact.number}>
            <img
              height="40px"
              width="40px"
              src="/svgs/phone.svg"
              alt="phone icon"
            />
          </a>
          <a href={"mailto:" + contact.email}>
            <img
              height="40px"
              width="40px"
              src="/svgs/email.svg"
              alt="phone icon"
            />
          </a>
        </div>
        <div className={style.contact}>
          <div className={style.tel_email}>
            <div>
              <a href={"tel:" + contact.number}>
                <img
                  height="40px"
                  width="40px"
                  src="/svgs/phone.svg"
                  alt="phone icon"
                />
              </a>
              <div>
                <h4>{contact.phone}</h4>
                <span>
                  <a href={"tel:" + contact.number}>{contact.number}</a>
                </span>
              </div>
            </div>
            <span>
              <span />
            </span>
            <div>
              <a href={"mailto:" + contact.email}>
                <img
                  height="40px"
                  width="40px"
                  src="/svgs/email.svg"
                  alt="phone icon"
                />
              </a>
              <div>
                <h4>E-mail</h4>
                <span>
                  <a href={"mailto:" + contact.email}>{contact.email}</a>
                </span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(handleSend)}>
            <input
              {...register("name")}
              type="text"
              name="name"
              id="name"
              placeholder={contact.form.name}
            />
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              placeholder={contact.form.email}
            />
            <textarea
              {...register("body")}
              name="body"
              id="message"
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
