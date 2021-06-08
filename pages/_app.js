import Head from "next/head";
import Layouts from "../components/Layouts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />

        <title>Cdi_Construit</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <link
          rel="shortcut icon"
          href="images/fevicon.ico.png"
          type="image/x-icon"
        />

        <link rel="stylesheet" href="css/bootstrap.min.css" />

        <link rel="stylesheet" href="style.css" />

        <link rel="stylesheet" href="css/colors.css" />

        <link rel="stylesheet" href="css/versions.css" />

        <link rel="stylesheet" href="css/responsive.css" />

        <link rel="stylesheet" href="css/building.css" />
      </Head>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}

export default MyApp;
