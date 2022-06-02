import Image from "next/image";

import Section, { Article } from "/src/components/Section";
import Timeline, { TimelineItem } from "/src/components/Timeline";
import ProgressBar from "/src/components/ProgressBar";
import Copyright from "/src/components/Copyright";

export default function Resume() {
  return (
    <Section title="Curriculum" className="resume">
      <Article title="Educacion" icon="/assets/icons/education.svg">
        <Timeline>
          <TimelineItem
            title="Diseño Web Responsive"
            startDate="01-2021"
            finishDate="02-2021"
            description="Conceptos básicos y avanzados de HTML y CSS para la creación de páginas web adaptables a diferentes tamaños de pantalla utilizando FlexBox y Grid CSS."
          />

          <TimelineItem
            title="Algoritmos de Javascript y Estructuras de Datos"
            startDate="02-2021"
            finishDate="03-2021"
            description="Fundamentos de JavaScript incluyendo variables, arreglos, objetos, bucles y funciones. Creación algoritmos para manipular cadenas, factorizar números, etc. utilizando Programación Orientada a Objetos (OOP) y Programación Funcional (FP)."
          />

          <TimelineItem
            title="Librerías Front-End"
            startDate="03-2021"
            finishDate="04-2021"
            description="Creación de sitios web rápidamente utilizando Bootstrap. Utilización de SASS para anidar CSS, crear estilos reutilizables con mixins, añadir lógica y bucles a los estilos, y más. Uso de React y Redux para construir interfaces de usuario reutilizables controladas por componentes, para páginas web o aplicaciones."
          />

          <TimelineItem
            title="Desarrollo Back End y APIs"
            startDate="04-2021"
            finishDate="05-2021"
            description='Escribir aplicaciones de back-end con Node.js y npm (Node Package Manager). Construir aplicaciones web con el framework Express, y un micro servicio "People Finder" con MongoDB y la biblioteca Mongoose.'
          />
        </Timeline>
      </Article>

      <Article title="Habilidades">
        <div className="skills">
          <div className="skills-group">
            <h5 className="title">Front-End</h5>

            <div className="container">
              <ProgressBar title="HTML" progress={90} />
              <ProgressBar title="CSS / SASS" progress={85} />
              <ProgressBar title="Tailwind" progress={80} />
              <ProgressBar title="Javascript" progress={85} />
              <ProgressBar title="Typescript" progress={75} />
              <ProgressBar title="ReactJS / NextJS" progress={80} />
            </div>
          </div>

          <div className="skills-group">
            <h5 className="title">Back-End</h5>

            <div className="container">
              <ProgressBar title="PHP" progress={70} />
              <ProgressBar title="Nodejs" progress={85} />
              <ProgressBar title="Express" progress={80} />
              <ProgressBar title="Mongoose" progress={75} />
              <ProgressBar title="MongoDB" progress={70} />
              <ProgressBar title="MySQL" progress={75} />
            </div>
          </div>
        </div>
      </Article>

      <Copyright />
    </Section>
  );
}
