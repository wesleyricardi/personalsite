import style from "../../styles/components/main/contact.module.css";

export default function contact() {
  return (
    <section className={style.main}>
      <h2>Entre em contato</h2>
      <p>Adoraria ouvir sobre o que achou</p>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <span>
            <span>+55 22 99608 7165</span>
            <span>fale@wesleyricardi.com</span>
            <img src="/social_imgs/whatsapp.png" alt="" />
            <img src="/social_imgs/linkedin.png" alt="" />
            <img src="/social_imgs/github.png" alt="" />
            <span>Cabo Frio, RJ - Brasil</span>
          </span>
        </div>
        <form action="">
          <input type="text" name="name" id="name" placeholder="Nome:*" />
          <input type="email" name="email" id="email" placeholder="E-mail:*" />
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
    </section>
  );
}
