import "../styles/globals.css";
import type {AppProps} from "next/app";
import {UiProvider} from "../context/ui";
import {AnimatePresence} from "framer-motion";
import {SWRConfig} from "swr";

function MyApp({Component, pageProps, router}: AppProps) {
  const url = router.route;

  return (
    <>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <UiProvider>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={url} />
          </AnimatePresence>
        </UiProvider>
      </SWRConfig>
    </>
  );
}

export default MyApp;
