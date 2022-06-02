import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import Section, { Article } from "../components/Section";
import { Input, Textarea, Submit } from "../components/FormFields";
import Copyright from "../components/Copyright";

export default function Portfolio() {
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
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
      </Article>

      <Article title="Formulario de Contacto" className="contact-form">
        <form
          className="form"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log("Enviando Mensaje...");
          }}
        >
          <Input icon={faUser} type="text" placeholder="Nombre" />
          <Input icon={faEnvelope} type="email" placeholder="Email" />

          <Textarea placeholder="Escriba su mensaje" />

          <Submit title="Enviar Mensaje" icon={faLocationArrow} />
        </form>
      </Article>

      <Copyright />
    </Section>
  );
}
