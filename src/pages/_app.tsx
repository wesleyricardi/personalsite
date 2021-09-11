import "../styles/globals.css";
import "../styles/config/paleta.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  //console.log((document.querySelector("body") as HTMLElement).style);

  return <Component {...pageProps} />;
}
export default MyApp;
