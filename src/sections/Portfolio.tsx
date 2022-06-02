import { FC } from "react";
import Image from "next/image";

import Section from "../components/Section";
import Dropdown from "../components/Dropdown";
import Copyright from "../components/Copyright";

const categories: string[] = [
  "Todos",
  "Vanilla Javascript",
  "ReactJS",
  "NextJS",
  "NodeJS",
  "MongoDB",
  "MySQL",
];

const projects: {
  imageSrc: string;
  title: string;
  categories: string[];
}[] = [];

export default function Portfolio() {
  return (
    <Section title="Portafolio" className="portfolio">
      <div className="container">
        {projects.length > 0 && (
          <Dropdown placeholder="Seleccionar categoría" options={categories} />
        )}

        <div className="projects">
          {projects.length > 0 ? (
            projects.map(({ imageSrc, title, categories }, index) => (
              <Project
                key={index}
                imageSrc={imageSrc}
                title={title}
                categories={categories}
              />
            ))
          ) : (
            <div className="null-projects">No hay proyectos</div>
          )}
        </div>
      </div>

      <Copyright />
    </Section>
  );
}

const Project: FC<{
  imageSrc: string;
  title: string;
  categories: string[];
}> = ({ imageSrc, title, categories }) => (
  <div className="project">
    <div className="image">
      <Image src={imageSrc} width={100} height={100} layout="responsive" />
    </div>

    <h4 className="title">{title}</h4>

    <div className="categories">
      {categories.map((category, index) => (
        <span key={index}>{category}</span>
      ))}
    </div>
  </div>
);
