import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
import "react-photo-view/dist/react-photo-view.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
