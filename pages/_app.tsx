import App from "next/app";

import Navigation from "../src/components/Navigation";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Navigation />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
