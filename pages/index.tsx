import Header from "components/organisms/Header";
import HomeHero from "components/organisms/HomeHero";
import DefaultTemplate from "components/templates/Default";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WinRent - Compre, alugue, ou venda o seu imóvel</title>
      </Head>
      <DefaultTemplate header={<Header />} hero={<HomeHero />} />
    </>
  );
};

export default Home;
