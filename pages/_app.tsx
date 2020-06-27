import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import { Box, theme, ThemeProvider } from "@chakra-ui/core";

import Navigation from "../src/components/Navigation";
import { useTracking } from "../src/tracking";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
  useTracking();
  return (
    <ThemeProvider theme={theme}>
      <Head key={0}>
        <title>PabloSz</title>
      </Head>
      <Navigation />
      <Box>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
