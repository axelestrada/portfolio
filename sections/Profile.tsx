import Image from "next/image";

import styles from "./styles/Profile.module.sass";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import profileAvatar from "/assets/images/profile-avatar.png";
import Download from "/assets/icons/Download.svg";

import Button from "../components/Button";

export default function Profile() {
  return (
    <section className={styles["profile"]}>
      <div className={styles["profile__picture"]}>
        <Image src={profileAvatar} alt="Axel Estrada" layout="responsive" priority />
      </div>

      <div className={styles["profile__information"]}>
        <h1 className={styles["profile__name"]}>
          Axel <b>Estrada</b>
        </h1>
        <h2 className={styles["profile__occupation"]}>Desarrollador Web</h2>

        <ul className={styles["profile__social-media"]}>
          <li className={styles["profile__social-network"]}>
            <a className={styles["icon"]} href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>

          <li className={styles["profile__social-network"]}>
            <a className={styles["icon"]} href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>

          <li className={styles["profile__social-network"]}>
            <a className={styles["icon"]} href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>

        <Button title="Descargar CV" svg={<Download />} fullWidth/>
      </div>
    </section>
  );
}
