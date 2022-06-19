import {
  FC,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import Button from "./Button";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

export const Input: FC<{
  type: string;
  name: string;
  icon?: IconProp;
  placeholder: string;
  error?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
}> = ({ type, name, icon, placeholder, error, value, onChange, onBlur }) => (
  <div className={`input ${error && "error"}`}>
    {icon && <FontAwesomeIcon icon={icon} className="icon" />}
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete="off"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />

    {error && (
      <div className="error">
        <FontAwesomeIcon icon={faInfo} className="icon" />
        <div className="tooltip">{error}</div>
      </div>
    )}
  </div>
);

export const Textarea: FC<{
  name: string;
  placeholder: string;
  error?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur: FocusEventHandler<HTMLTextAreaElement>;
}> = ({ name, placeholder, error, value, onChange, onBlur }) => (
  <div className={`textarea ${error && "error"}`}>
    <textarea
      name={name}
      value={value}
      placeholder={placeholder}
      autoComplete="off"
      onChange={onChange}
      onBlur={onBlur}
    ></textarea>

    {error && (
      <div className="error">
        <FontAwesomeIcon icon={faInfo} className="icon" />
        <div className="tooltip">{error}</div>
      </div>
    )}
  </div>
);

export const Submit: FC<{ title: string; image?: string; icon?: IconProp }> = ({
  title,
  image,
  icon,
}) => <Button title={title} buttonType="submit" icon={icon} image={image} />;
