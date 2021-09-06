import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";

export default function Index() {
  return (
    <>
      <Head>
        <title>Dev. Wesley Ricardi - Desenvolvedor full stack</title>
        <meta name="description" content="Desenvolvedor Web pleno full stack" />
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
      <Header />
      <Main />
      <Footer />
    </>
  );
}
