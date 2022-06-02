import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../src/components/Navbar";

import Profile from "../src/sections/Profile";
import ContactSection from "../src/sections/Contact";

const Portfolio: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Axel Estrada | Contacto</title>
        <meta
          name="description"
          content="Ponte en contacto conmigo desde el formulario presente a continuacion"
        />
      </Head>

      <main>
        <div className="container">
          <Navbar />

          <Profile />
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
