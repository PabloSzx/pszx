import App, { Container } from "next/app";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
