import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import Button from "./Button";
import { Input } from "./FormFields";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <p className="text">
        Para obtener las ultimas actualizaciones sobre el blog, por favor
        suscribase al boletin informativo
      </p>

      <form className="form">
        <Input icon={faEnvelope} type="email" placeholder="Email" />

        <Button title="Suscribirse" />
      </form>
    </div>
  );
}
