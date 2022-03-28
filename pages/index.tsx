import Footer from "components/organisms/Footer";
import Header from "components/organisms/Header";
import HomeHero from "components/organisms/HomeHero";
import SiteMap from "components/organisms/SiteMap";
import DefaultTemplate from "components/templates/Default";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WinRent - Compre, alugue, ou venda o seu imóvel</title>
      </Head>
      <DefaultTemplate
        header={<Header />}
        hero={<HomeHero />}
        siteMap={<SiteMap />}
        footer={<Footer />}
      />
    </>
  );
};

export default Home;
