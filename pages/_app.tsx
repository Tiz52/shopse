import "../styles/globals.css";
import type {AppProps} from "next/app";
import {UiProvider} from "../context/ui";
import {AnimatePresence} from "framer-motion";

function MyApp({Component, pageProps, router}: AppProps) {
  const url = router.route;

  return (
    <>
      <UiProvider>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={url} />
        </AnimatePresence>
      </UiProvider>
    </>
  );
}

export default MyApp;
