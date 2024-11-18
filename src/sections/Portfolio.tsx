import { FC } from "react";
import Image from "next/image";

import Section from "../components/Section";
import Dropdown from "../components/Dropdown";
import Copyright from "../components/Copyright";
import Project, { Action } from "../components/Project";

const categories: string[] = [
  "Todos",
  "React JS",
  "React Native",
  "Next JS",
  "SQLite",
  "Tailwind CSS",
];

export default function Portfolio() {
  return (
    <Section title="Proyectos" className="portfolio">
      <div className="container">
       
          <Dropdown placeholder="Seleccionar categoría" options={categories} />
        

        <div className="projects">
          <Project
            imageSrc="/assets/images/monety-preview.jpg"
            title="Monety (En Desarrollo)"
            description="Aplicación móvil de gestión financiera personal. Permite registrar ingresos, gastos y presupuestos, con un diseño adaptable y visualizaciones interactivas."
            technologies={[
              "React Native",
              "NativeWind",
              "Typescript",
              "SQLite",
            ]}
          >
            <Action title="Descargar" type="button" href="https://expo.dev/artifacts/eas/2VFw5kANJM2pppxaUJtH4X.apk" />
            <Action title="Ver repositorio" type="link" href="https://github.com/axelestrada/monety" />
          </Project>

          <Project
            imageSrc="/assets/images/portfolio-preview.jpg"
            title="Portafolio Personal"
            description="Mi portafolio profesional diseñado para destacar mis habilidades y proyectos. Incluye un diseño responsivo, optimización de SEO y accesibilidad para una experiencia de usuario fluida."
            technologies={["Next JS", "TypeScript", "SASS"]}
          >
            <Action title="Ver en vivo" type="button" href="/" />
            <Action
              title="Ver repositorio"
              type="link"
              href="https://github.com/axelestrada/portfolio"
            />
          </Project>
        </div>
      </div>

      <Copyright />
    </Section>
  );
}
