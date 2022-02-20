import { FC, ReactElement } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import styles from "./styles/Button.module.sass";

interface Props {
  title: string;
  type?: "primary";
  icon?: IconProp;
  svg?: ReactElement;
  fullWidth?: Boolean;
}

const Button: FC<Props> = ({
  icon,
  title,
  type = "primary",
  svg,
  fullWidth,
}) => {
  return (
    <div
      className={`${styles["button"]} ${styles[`button--${type}`]} ${
        fullWidth ? styles[`button--full-width`] : ""
      }`}
    >
      <div className={styles["button__content"]}>
        {icon ? (
          <FontAwesomeIcon className={styles["button__icon"]} icon={icon} />
        ) : (
          <span className={styles["button__svg"]}>{svg}</span>
        )}

        {title}
      </div>
    </div>
  );
};

export default Button;
