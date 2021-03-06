import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document<{ styleTags: JSX.Element[] }> {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" type="text/css" href="/style.css" />
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          <script
            async
            defer
            data-website-id="bbcdcff9-8bd7-47d8-9c7d-24fd898785c5"
            src="https://umami.pablosz.tech/umami.js"
          ></script>
          {this.props.styleTags}
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ({ renderPage }) => {
  const sheet = new ServerStyleSheet();

  try {
    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  } finally {
    sheet.seal();
  }
};
