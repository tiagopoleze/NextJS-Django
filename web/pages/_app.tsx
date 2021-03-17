// React.JS
import React from "react";

// Next.JS
import Head from "next/head";
import { AppProps } from "next/app";

// Styles
import "tailwindcss/tailwind.css";

// Components
import Layout from "../components/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>Provisn</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
};

export default MyApp;
