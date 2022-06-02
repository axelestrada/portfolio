import { FC, ReactNode } from "react";
import Image from "next/image";

import Section, { Article } from "/src/components/Section";
import Copyright from "/src/components/Copyright";

export default function Home() {
  return (
    <Section title="Sobre Mi" className="home">
      <Article className="about">
        <div className="description">
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
      </Article>

      <Article title="¿Que puedo ofrecer?" className="services">
        <div className="container">
          <Service
            icon="/assets/icons/dev.svg"
            title="Desarrollo Web"
            description="Construcción de sitios de alta calidad a nivel profesional."
          />

          <Service
            icon="/assets/icons/phone.svg"
            title="Aplicaciones Móviles"
            description="Desarrollo profesional de aplicaciones para Android y iOS."
          />

          <Service
            icon="/assets/icons/seo.svg"
            title="Optimización de SEO"
            description="Mejora del posicionamiento de su sitio web en motores de búsqueda."
          />

          <Service
            icon="/assets/icons/maintenance.svg"
            title="Actualización y Mantenimiento"
            description="Constante actualización y mantenimiento de su sitio web."
          />
        </div>
      </Article>

      <Copyright />
    </Section>
  );
}

const Service: FC<{
  icon: ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="service">
    <div className="icon">
      <Image src={icon} layout="responsive" width={50} height={50} />
    </div>
    <h4 className="title">{title}</h4>
    <p className="description">{description}</p>
  </div>
);
