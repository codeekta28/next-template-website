// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { RedirectUserOnTokenBasis } from "../helper/RedirectUserOnTokenBasis";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    RedirectUserOnTokenBasis(router);
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
