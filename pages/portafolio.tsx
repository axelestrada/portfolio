import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../src/components/Navbar";

import Profile from "../src/sections/Profile";
import PortfolioSection from "../src/sections/Portfolio";

const Portfolio: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Axel Estrada | Portafolio</title>
        <meta
          name="description"
          content="Aqui te comparto algunos de los mejores proyectos en los
          que he trabajado, haciendo uso de diferentes tecnologias y frameworks
          segun sea requerido"
        />
      </Head>

      <main>
        <div className="container">
          <Navbar />

          <Profile />
          <PortfolioSection />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
