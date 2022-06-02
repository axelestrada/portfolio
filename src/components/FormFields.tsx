import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import Button from "./Button";

export const Input: FC<{
  type: string;
  icon?: IconProp;
  placeholder: string;
}> = ({ icon, type, placeholder }) => (
  <div className="input">
    {icon && <FontAwesomeIcon icon={icon} />}
    <input type={type} placeholder={placeholder} autoComplete="off" />
  </div>
);

export const Textarea: FC<{ type: string; placeholder: string }> = ({
  type,
  placeholder,
}) => (
  <div className="textarea">
    <textarea placeholder={placeholder} autoComplete="off"></textarea>
  </div>
);

export const Submit: FC<{ title: string; image?: string; icon?: IconProp }> = ({
  title,
  image,
  icon,
}) => <Button title={title} buttonType="submit" icon={icon} />;
