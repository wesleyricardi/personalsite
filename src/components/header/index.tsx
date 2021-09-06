import style from "../../styles/components/header/index.module.css";

export default function Header() {
  return (
    <header id="header" className={style.main}>
      <div>
        <h1>Hello World</h1>
        <h2>Me chamo Wesley Ricardi</h2>
        <span>
          Eu sou um desenvolvedor web full stack brasileiro de 26 anos, de uma
          olhada em meu portfolio e se gostar entre em contato comigo
        </span>
      </div>
    </header>
  );
}
