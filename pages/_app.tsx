import type { AppProps } from "next/app";
import Theme from "../styles/Theme";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
