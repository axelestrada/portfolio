import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  imageSrc: string;
  title: string;
  description: string;
  technologies: string[];
  children: ReactNode;
}

export default function Project({
  imageSrc,
  title,
  technologies,
  description,
  children,
}: Props) {
  return (
    <div className="project">
      <div className="image">
        <Image
          width={100}
          height={80}
          src={imageSrc}
          layout="responsive"
          objectFit="contain"
          alt={title}
        />
      </div>

      <h4 className="title">{title}</h4>

      <div className="technologies">
        {technologies.map((technology, index) => (
          <span key={technology + index}>{technology}</span>
        ))}
      </div>

      <p className="description">{description}</p>

      <div className="actions">{children}</div>
    </div>
  );
}

export function Action({
  title,
  type,
  href,
}: {
  title: string;
  type: "button" | "link";
  href: string;
}) {
  return (
    <a className={type} target="_blank" href={href} rel="noreferrer">
      {title}
    </a>
  );
}
