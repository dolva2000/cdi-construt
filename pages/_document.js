import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="js/all.js"></script>
          <script src="js/custom.js"></script>
          <script src="js/portfolio.js"></script>
          <script src="js/hoverdir.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
