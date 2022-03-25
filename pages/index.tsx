import Logo from "components/atoms/Logo";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WinRent - Compre, alugue, ou venda o seu imóvel</title>
      </Head>
      <Logo />
      Teste
    </>
  );
};

export default Home;
