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
          <script
            async
            src="https://ackee.pablosz.tech/info.js"
            data-ackee-server="https://ackee.pablosz.tech"
            data-ackee-domain-id="8c780402-fea8-4df2-bbc2-eaceb1a6f028"
            data-ackee-opts='{ "ignoreLocalhost": true, "detailed": true }'
          ></script>
          <link rel="stylesheet" type="text/css" href="/style.css" />
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
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
