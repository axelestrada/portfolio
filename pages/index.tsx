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
          content="Desarrollador web especializado en la construcción de aplicaciones y sitios web haciendo uso de diferentes tecnologías según sea necesario."
        />
        <link rel="canonical" href="https://axelestrada.ml" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_HN" />
        <meta property="og:title" content="Axel Estrada | Desarrollador Web" />
        <meta
          property="og:description"
          content="Desarrollador web especializado en la construcción de aplicaciones y sitios web haciendo uso de diferentes tecnologías según sea necesario para lograr el mejor resultado final."
        />
        <meta
          property="og:image"
          content="https://axelestrada.ml/assets/images/index-preview.jpeg"
        />
        <meta property="og:url" content="https://axelestrada.ml" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Axel Estrada | Desarrollador Web" />
        <meta name="twitter:url" content="https://axelestrada.ml" />
        <meta name="twitter:site" content="@axelestradadev" />
        <meta
          name="twitter:description"
          content="Desarrollador web especializado en la construcción de aplicaciones y sitios web haciendo uso de diferentes tecnologías según sea necesario para lograr el mejor resultado final."
        />
        <meta
          name="twitter:image"
          content="https://axelestrada.ml/assets/images/index-preview.jpeg"
        />
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
