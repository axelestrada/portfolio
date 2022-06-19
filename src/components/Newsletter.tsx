// Formik
import { useFormik } from "formik";
import * as yup from "yup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import Button from "./Button";
import { Input } from "./FormFields";

export default function Newsletter() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: () => {
      console.log(formik.values.email)
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Ingrese una direccion de email valida")
        .required("Por favor ingrese su email"),
    }),
  });

  return (
    <div className="newsletter">
      <p className="text">
        Para obtener las ultimas actualizaciones sobre el blog, por favor
        suscribase al boletin informativo
      </p>

      <form className="form" onSubmit={formik.handleSubmit}>
        <Input
          type="email"
          name="email"
          icon={faEnvelope}
          placeholder="Email"
          error={formik.errors.email}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Button title="Suscribirse" buttonType="submit" />
      </form>
    </div>
  );
}
