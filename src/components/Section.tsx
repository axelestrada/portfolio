import { FC, ReactNode } from "react";
import Image from "next/image";

const Section: FC<{
  title: string;
  className?: string;
  children: ReactNode;
}> = ({ title, className, children }) => (
  <section className={`section ${className || ""}`}>
    <h3 className="title">
      {title}
      <span className="underline"></span>
    </h3>

    {children}
  </section>
);

export const Article: FC<{
  title?: string;
  icon?: string;
  iconAlt?: string;
  className?: string;
  children: ReactNode;
}> = ({ title, icon, iconAlt, className, children }) => (
  <article className={`article ${className || ""}`}>
    {title && (
      <h4 className="title">
        {icon && (
          <div className="icon">
            <Image
              src={icon}
              width={20}
              height={20}
              layout="responsive"
              alt={iconAlt}
            />
          </div>
        )}
        {title}
      </h4>
    )}

    {children}
  </article>
);

export default Section;
