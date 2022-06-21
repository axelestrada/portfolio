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

import {
  faCalendar,
  faMapMarker,
  faEnvelope,
  faCellphone,
  faWorld,
  faDownload,
} from "../icons/customIcons";

import Button from "../components/Button";

export default function Profile() {
  return (
    <section className="profile">
      <div className="picture">
        <Image
          src="/assets/images/profile-avatar.jpg"
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
            href="https://instagram.com/axelestradadev"
            icon={faInstagram}
          />

          <SocialNetwork
            href="https://github.com/axelestrada"
            icon={faGithub}
          />

          <SocialNetwork
            href="https://linkedin.com/in/axelestradadev"
            icon={faLinkedinIn}
          />
        </ul>

        <ul className="details">
          <DetailsItem text="30 de abril del 2003" icon={faCalendar} />

          <DetailsItem text="Tegucigalpa, Honduras" icon={faMapMarker} />

          <DetailsItem
            text="hola@axelestrada.dev"
            icon={faEnvelope}
            href="mailto:hola@axelestrada.dev"
          />

          <DetailsItem
            text="+504 9520-3946"
            icon={faCellphone}
            href="tel:+50495203946"
          />

          <DetailsItem
            text="infinitycss.com"
            icon={faWorld}
            href="https://infinitycss.com"
          />
        </ul>

        <Button title="Descargar CV" icon={faDownload} fullWidth />
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

const DetailsItem: FC<{ text: string; icon: IconProp; href?: string }> = ({
  text,
  icon,
  href,
}) => (
  <li className="item">
    <FontAwesomeIcon icon={icon} className="icon" />

    {href ? (
      <a href={href} className="link" target="_blank">
        {text}
      </a>
    ) : (
      <p className="text">{text}</p>
    )}
  </li>
);
