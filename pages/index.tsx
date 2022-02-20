import type { NextPage } from "next";
import Head from "next/head";

// Components
import Navbar from "../components/Navbar";

// Sections
import Profile from "../sections/Profile";
import Home from "../sections/Home";

// Styles
import styles from "../styles/Main.module.sass";

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Axel Estrada</title>
        <meta
          name="description"
          content="Desarrollador web especializado en la construcción de aplicaciones y sitios web
          con un domino excelente de los lenguajes HTML, CSS y JavaScript. Con sólidos conocimientos
          en tecnologías front-end y back-end como ReactJS, NodeJS, MySQL entre otros, además de habilidades
          básicas de diseño y optimización de SEO. Con todas las habilidades necesarias para construir una
          aplicación o sitio web que sea funcional y fácil de usar."
        />
      </Head>

      <main className={styles["main"]}>
        <div className={styles["main__container"]}>
          <Navbar />

          <Profile />
          <Home />
        </div>
      </main>
    </div>
  );
};

export default Index;
