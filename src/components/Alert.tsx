import { FC, MouseEventHandler } from "react";
import Image from "next/image";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export interface IAlert {
  type: "success" | "error";
  title: string;
  description: string;
  buttonTitle?: string;
  buttonOnClick?:  MouseEventHandler<HTMLButtonElement>;
  close?: MouseEventHandler<SVGSVGElement>;
}

const Alert: FC<IAlert> = ({ type, title, description, buttonTitle = "Continuar", buttonOnClick, close }) => (
  <div className={`alert ${type}`}>
    <div className="card">
      <FontAwesomeIcon icon={faTimes} className="close" onClick={close} />
      <div className="icon">
        <Image
          src={
            type === "success"
              ? "/assets/icons/check-mark.svg"
              : type === "error"
              ? "/assets/icons/x.svg"
              : ""
          }
          width={50}
          height={50}
          layout="responsive"
          alt=""
        />
      </div>

      <div className="content">
        <h6 className="title">{title}</h6>
        <p className="description">{description}</p>
      </div>

      <Button title={buttonTitle} onClick={buttonOnClick}/>
    </div>
  </div>
);

export default Alert;
