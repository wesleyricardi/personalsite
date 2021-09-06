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
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
