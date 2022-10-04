import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
import Layout from "../src/components/templates/Layout";
import { Provider } from "../src/Context/Store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Provider>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </Provider>
    </>
  );
}

export default MyApp;
