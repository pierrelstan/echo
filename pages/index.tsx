import Layout from "components/common/Layout";
import PageUnderConstruction from "components/PageUnderConstruction";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Echo app </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageUnderConstruction />
      </Layout>
    </div>
  );
};

export default Home;
