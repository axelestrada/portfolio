import { FC } from "react";
import Image from "next/image";

import styles from "./styles/Portfolio.module.sass";

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
  imageSrc: StaticImageData;
  title: string;
  categories: string[];
}[] = [];

export default function Portfolio() {
  return (
    <section className={styles["portfolio"]}>
      <h3 className={styles["section__title"]}>
        Portafolio <span className={styles["underline"]}></span>
      </h3>

      <div className={styles["portfolio__container"]}>
        {projects.length > 0 && (
          <Dropdown placeholder="Seleccionar categoría" options={categories} />
        )}

        <div className={styles["portfolio__projects"]}>
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
            <span className={styles["portfolio__no-projects"]}>
              No hay proyectos
            </span>
          )}
        </div>
      </div>

      <Copyright />
    </section>
  );
}

const Project: FC<{
  imageSrc: StaticImageData;
  title: string;
  categories: string[];
}> = ({ imageSrc, title, categories }) => (
  <div className={styles["portfolio__project"]}>
    <div className={styles["image"]}>
      <Image src={imageSrc} layout="responsive" alt={title} />
    </div>

    <h4 className={styles["title"]}>{title}</h4>

    <div className={styles["categories"]}>
      {categories.map((category, index) => (
        <span key={index}>{category}</span>
      ))}
    </div>
  </div>
);
