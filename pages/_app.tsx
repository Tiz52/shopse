import "../styles/globals.css";
import type {AppProps} from "next/app";
import {Header} from "../components/layout";
import {UiProvider} from "../context/ui";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <UiProvider>
        <Header />
        <Component {...pageProps} />
      </UiProvider>
    </>
  );
}

export default MyApp;
