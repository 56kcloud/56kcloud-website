import Document, { Html, Head, Main, NextScript } from "next/document";

export const siteTitle = "Edeltech";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>{siteTitle}</title>
          <meta
            name="description"
            content="We're a team of passionate engineers ready to develop your next web, mobile or desktop applications."
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
