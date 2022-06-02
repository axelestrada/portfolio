import { FC, ReactElement } from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  title: string;
  type?: "primary";
  buttonType?: "button" | "reset" | "submit" | undefined;
  icon?: IconProp;
  image?: string;
  fullWidth?: Boolean;
}

const Button: FC<Props> = ({
  icon,
  title,
  type = "primary",
  buttonType = "button",
  image,
  fullWidth = false,
}) => {
  return (
    <button
      type={buttonType}
      className={`button ${type} ${fullWidth ? "full-width" : ""}`}
    >
      <div className="content">
        {icon ? (
          <FontAwesomeIcon className="icon" icon={icon} />
        ) : (
          image && (
            <div className="image">
              <Image src={image} width={50} height={50} layout="responsive" />
            </div>
          )
        )}

        {title}
      </div>
    </button>
  );
};

export default Button;
