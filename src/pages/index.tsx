import Head from "next/head";
import Nav from "../components/nav";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import pt_BR from "../language/pt_BR.json";
import en_US from "../language/en_US.json";
import { languages } from "../language/interface";

export default function Index() {
  const [language, setLanguage] = useState<languages>(pt_BR);

  useEffect(() => {
    const language: string = navigator.language.slice(0, 2);
    if (language === "pt") setLanguage(pt_BR);
    else if (language === "en") setLanguage(en_US);
    else setLanguage(en_US);
  }, []);

  return (
    <>
      <Head>
        <title>{language.head.title}</title>
        <meta name="description" content={language.head.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav nav={language.nav} />
      <Header header={language.header} />
      <Main main={language.main} />
      <Footer footer={language.footer} />
    </>
  );
}
