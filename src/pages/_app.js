import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
};

export default MyApp;
