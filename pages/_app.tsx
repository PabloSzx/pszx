import App from "next/app";

import Navigation from "../src/components/Navigation";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>PabloSz</title>
        </Head>
        <Navigation />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
