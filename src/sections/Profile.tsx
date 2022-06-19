import { FC } from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Button from "../components/Button";

export default function Profile() {
  return (
    <section className="profile">
      <div className="picture">
        <Image
          src="/assets/images/profile-avatar.svg"
          alt="Axel Estrada"
          width={180}
          height={180}
          layout="responsive"
          priority
        />
      </div>

      <div className="information">
        <h1 className="name">
          Axel <b>Estrada</b>
        </h1>

        <h2 className="occupation">Desarrollador Web</h2>

        <ul className="social-media">
          <SocialNetwork
            href="https://facebook.com/axelestradadev"
            icon={faFacebookF}
          />

          <SocialNetwork
            href="https://twitter.com/axelestradadev"
            icon={faTwitter}
          />

          <SocialNetwork
            href="https://www.instagram.com/axelestradadev"
            icon={faInstagram}
          />

          <SocialNetwork
            href="https://github.com/axelestrada"
            icon={faGithub}
          />

          <SocialNetwork
            href="https://www.linkedin.com/in/axelestradadev"
            icon={faLinkedinIn}
          />
        </ul>

        <ul className="details">
          <DetailsItem
            text="30 de abril del 2003"
            icon="/assets/icons/calendar.svg"
          />

          <DetailsItem
            text="Tegucigalpa, Honduras"
            icon="/assets/icons/map-marker.svg"
          />

          <DetailsItem
            text="hola@axelestrada.dev"
            icon="/assets/icons/envelope.svg"
            href="mailto:hola@axelestrada.dev"
          />

          <DetailsItem
            text="+504 9520-3946"
            icon="/assets/icons/cellphone.svg"
            href="tel:+50495203946"
          />

          <DetailsItem
            text="infinitycss.com"
            icon="/assets/icons/world.svg"
            href="https://infinitycss.com"
          />
        </ul>

        <Button
          title="Descargar CV"
          image="/assets/icons/download.svg"
          fullWidth
        />
      </div>
    </section>
  );
}

const SocialNetwork: FC<{ href: string; icon: IconProp }> = ({
  href,
  icon,
}) => (
  <li className="social-network">
    <a className="icon" href={href} target="_blank">
      <FontAwesomeIcon icon={icon} />
    </a>
  </li>
);

const DetailsItem: FC<{ text: string; icon: string; href?: string }> = ({
  text,
  icon,
  href,
}) => (
  <li className="item">
    <div className="icon">
      <Image src={icon} width={20} height={20} layout="responsive" />
    </div>

    {href ? (
      <a href={href} className="link" target="_blank">
        {text}
      </a>
    ) : (
      <p className="text">{text}</p>
    )}
  </li>
);
