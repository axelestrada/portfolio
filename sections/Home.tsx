import { FC, ReactNode } from "react";
import styles from "./styles/Home.module.sass";

import Copyright from "../components/Copyright";

import Dev from "/assets/icons/Dev.svg";
import Phone from "/assets/icons/Phone.svg";
import SEO from "/assets/icons/SEO.svg";
import Maintenance from "/assets/icons/Maintenance.svg";

export default function Home() {
  return (
    <section className={styles["home"]}>
      <h3 className={styles["section__title"]}>
        Sobre Mí <span className={styles["underline"]}></span>
      </h3>

      <article className={`${styles["article"]} ${styles["about"]}`}>
        <div className={styles["about__description"]}>
          <p>
            Desarrollador web especializado en la construcción de aplicaciones y
            sitios web con un domino excelente de los lenguajes HTML, CSS y
            JavaScript.
          </p>

          <p>
            Con sólidos conocimientos en tecnologías front-end y back-end como
            ReactJS, NodeJS, MySQL entre otros, además de habilidades básicas de
            diseñó y optimización de SEO. Con todas las habilidades necesarias
            para construir una aplicación o sitio web que sea funcional y fácil
            de usar.
          </p>
        </div>
      </article>

      <article className={`${styles["article"]} ${styles["services"]}`}>
        <h3 className={styles["article__title"]}>¿Que puedo ofrecer?</h3>

        <div className={styles["home__services"]}>
          <Service
            icon={<Dev />}
            title="Desarrollo Web"
            description="Construcción de sitios de alta calidad a nivel profesional."
          />

          <Service
            icon={<Phone />}
            title="Aplicaciones Móviles"
            description="Desarrollo profesional de aplicaciones para Android y iOS."
          />

          <Service
            icon={<SEO />}
            title="Optimización de SEO"
            description="Mejora del posicionamiento de su sitio web en motores de búsqueda."
          />

          <Service
            icon={<Maintenance />}
            title="Actualización y Mantenimiento"
            description="Constante actualización y mantenimiento de su sitio web."
          />
        </div>
      </article>

      <Copyright />
    </section>
  );
}

const Service: FC<{
  icon: ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className={styles["service"]}>
    <div className={styles["service__icon"]}>{icon}</div>
    <h4 className={styles["service__title"]}>{title}</h4>
    <p className={styles["service__description"]}>{description}</p>
  </div>
);
