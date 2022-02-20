import type { NextPage } from "next";
import Head from "next/head";

// Components
import Navbar from "../components/Navbar";

// Sections
import Profile from "../sections/Profile";
import PortfolioSection from "../sections/Portfolio";

// Styles
import styles from "../styles/Main.module.sass";

const Portfolio: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Axel Estrada</title>
        <meta
          name="description"
          content="Todos los conocimientos que he adquirido a lo largo del tiempo
          ha sido de manera autodidacta tomando cursos online en plataformas como
          Udemy, YouTube y Freecodecamp, en cada una de ellas he logrado adquirir
          la mayor cantidad de conocimientos posibles para convertirme en un
          desarrollador web profesional que no tiene nada que envidiarle a un
          titulo universitario."
        />
      </Head>

      <main className={styles["main"]}>
        <div className={styles["main__container"]}>
          <Navbar />

          <Profile />
          <PortfolioSection />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
