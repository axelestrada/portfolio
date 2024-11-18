import { FC } from "react";
import Image from "next/image";

import Section, { Article } from "../components/Section";
import Copyright from "../components/Copyright";

export default function Home() {
  return (
    <Section title="Sobre Mi" className="home">
      <Article className="about">
        <div className="description">
          <p>
            ¡Hola! Soy un desarrollador frontend apasionado por crear interfaces
            atractivas, funcionales y optimizadas. Mi enfoque principal es React
            y React Native, con experiencia en tecnologías como TypeScript,
            Next.js, Tailwind CSS y Sass.
          </p>

          <p>
            Actualmente, estoy trabajando en proyectos que van desde
            aplicaciones móviles para la gestión financiera hasta páginas web
            promocionales. Disfruto transformando ideas en experiencias
            digitales que hacen la vida más fácil para los usuarios.
          </p>

          <p>
            Soy una persona curiosa y autodidacta, siempre buscando aprender
            nuevas tecnologías y mejorar mis habilidades. Mi objetivo es
            convertir problemas complejos en soluciones simples y elegantes.
          </p>
        </div>
      </Article>

      <Article title="¿Que puedo ofrecer?" className="services">
        <div className="container">
          <Service
            image="/assets/icons/dev.svg"
            imageAlt="web development"
            title="Desarrollo Web"
            description="Construcción de sitios de alta calidad a nivel profesional."
          />

          <Service
            image="/assets/icons/phone.svg"
            imageAlt="smartphone"
            title="Aplicaciones Móviles"
            description="Desarrollo profesional de aplicaciones para Android y iOS."
          />

          <Service
            image="/assets/icons/seo.svg"
            imageAlt="seo optimization"
            title="Optimización de SEO"
            description="Mejora del posicionamiento de su sitio web en motores de búsqueda."
          />

          <Service
            image="/assets/icons/maintenance.svg"
            imageAlt="website maintenance"
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
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}> = ({ image, imageAlt, title, description }) => (
  <div className="service">
    <div className="image">
      <Image
        src={image}
        layout="responsive"
        width={50}
        height={50}
        alt={imageAlt}
      />
    </div>
    <h3 className="title">{title}</h3>
    <p className="description">{description}</p>
  </div>
);
