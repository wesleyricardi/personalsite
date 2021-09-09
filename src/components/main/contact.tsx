import style from "../../styles/components/main/contact.module.css";

export default function contact() {
  return (
    <section id="contact" className={style.main}>
      <h2>Entre em contato</h2>
      <p>Adoraria ouvir sobre o que achou</p>
      <div>
        <div className={style.social}>
          <img
            height="40px"
            width="40px"
            src="/social_imgs/whatsapp.svg"
            alt=""
          />
          <img
            height="40px"
            width="40px"
            src="/social_imgs/linkedin.svg"
            alt=""
          />
          <img
            height="40px"
            width="40px"
            src="/social_imgs/github.svg"
            alt=""
          />
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
                <h4>Telefone</h4>
                <span>+55 22 99608-7165</span>
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
                <span>fale@wesleyricardi.com</span>
              </div>
            </div>
          </div>
          <form action="">
            <input type="text" name="name" id="name" placeholder="Nome:*" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail:*"
            />
            <textarea
              name="texto"
              id="texto"
              cols={30}
              placeholder="Sua mensagem:*"
              rows={10}
            ></textarea>
            <div>
              <button>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
