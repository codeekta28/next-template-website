// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/globals.css";
import { useEffect } from "react";
import { RedirectUserOnTokenBasis } from "../helper/RedirectUserOnTokenBasis";
import { useRouter } from "next/router";
import HeadCompo from "../components/HeadCompo";

export default function App({ Component, pageProps }) {
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
