import { useState } from "react";

import { faUser, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import Section, { Article } from "../components/Section";
import { Input, Textarea, Submit } from "../components/FormFields";
import Copyright from "../components/Copyright";

export default function Portfolio() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    console.log("Sending Data", data);

    fetch("/api/send-mail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");

      if (res.status === 200) {
        console.log("Response succeeded!");

        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <Section title="Contacto" className="contact">
      <Article className="map">
        <div className="mapouter">
          <div className="gmap-canvas">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Tegucigalpa,%20Honduras&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
            ></iframe>
          </div>
        </div>
      </Article>

      <Article title="Formulario de Contacto" className="contact-form">
        <form className="form" onSubmit={sendMail}>
          <Input
            value={name}
            setState={setName}
            icon={faUser}
            type="text"
            placeholder="Nombre"
          />
          <Input
            value={email}
            setState={setEmail}
            icon={faEnvelope}
            type="email"
            placeholder="Email"
          />

          <Textarea
            value={message}
            setState={setMessage}
            placeholder="Escriba su mensaje"
          />

          <Submit title="Enviar Mensaje" icon={faLocationArrow} />
        </form>
      </Article>

      <Copyright />
    </Section>
  );
}
