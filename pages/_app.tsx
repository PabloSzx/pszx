import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import Navigation from "../src/components/Navigation";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head key={0}>
          <title>PabloSz</title>
        </Head>
        <Navigation />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
