import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../src/components/Navbar";
import Profile from "../src/sections/Profile";
import Home from "../src/sections/Home";

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Axel Estrada | Desarrollador Web</title>
        <meta
          name="description"
          content="Desarrollador Web especializado en la costrucción de sitios web personalizados."
        />
        <link rel="canonical" href="https://axelestrada.ml"/>
      </Head>

      <main>
        <div className="container">
          <Navbar />

          <Profile />
          <Home />
        </div>
      </main>
    </div>
  );
};

export default Index;
