import { FC, MouseEventHandler } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  title: string;
  type?: "primary";
  buttonType?: "button" | "reset" | "submit" | undefined;
  icon?: IconProp;
  fullWidth?: Boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({
  icon,
  title,
  type = "primary",
  buttonType = "button",
  fullWidth = false,
  onClick = () => {},
}) => {
  return (
    <button
      type={buttonType}
      className={`button ${type} ${fullWidth ? "full-width" : ""}`}
      onClick={onClick}
    >
      <div className="content">
        {icon && <FontAwesomeIcon className="icon" icon={icon} />}

        {title}
      </div>
    </button>
  );
};

export default Button;
