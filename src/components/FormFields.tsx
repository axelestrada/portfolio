import { FC, Dispatch, SetStateAction, ChangeEvent } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import Button from "./Button";

export const Input: FC<{
  type: string;
  icon?: IconProp;
  placeholder: string;
  value: string;
  setState: Dispatch<SetStateAction<string>>;
}> = ({ icon, type, placeholder, setState, value }) => (
  <div className="input">
    {icon && <FontAwesomeIcon icon={icon} />}
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
      }}
    />
  </div>
);

export const Textarea: FC<{
  placeholder: string;
  value: string;
  setState: Dispatch<SetStateAction<string>>;
}> = ({ placeholder, setState, value }) => (
  <div className="textarea">
    <textarea
      value={value}
      placeholder={placeholder}
      autoComplete="off"
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
        setState(e.target.value)
      }
    ></textarea>
  </div>
);

export const Submit: FC<{ title: string; image?: string; icon?: IconProp }> = ({
  title,
  image,
  icon,
}) => <Button title={title} buttonType="submit" icon={icon} image={image} />;
