import { useEffect, useState } from "react";

// Formik
import { useFormik } from "formik";
import * as yup from "yup";

//Fontawesome Icons
import { faLocationArrow, faSpinner } from "@fortawesome/free-solid-svg-icons";

import {
  faUser,
  faEnvelope,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";

//Components
import Alert, { IAlert } from "../components/Alert";
import Copyright from "../components/Copyright";
import Section, { Article } from "../components/Section";
import { Input, Textarea, Submit } from "../components/FormFields";

export default function Portfolio() {
  //Message Status
  const [messageStatus, setMessageStatus] = useState<
    "default" | "sending" | "sent"
  >("default");

  //Auto reset message status after 2 seconds
  useEffect(() => {
    if (messageStatus === "sent") {
      const timer = setTimeout(() => setMessageStatus("default"), 2000);

      return () => clearTimeout(timer);
    }
  }, [messageStatus]);

  //Alert Status and Alert Data
  const [alertStatus, setAlertStatus] = useState<"visible" | "hidden">(
    "hidden"
  );

  const [alertData, setAlertData] = useState<IAlert>({
    title: "",
    type: "success",
    description: "",
  });

  //Send Mail use API
  const sendMail = () => {
    setMessageStatus("sending");

    const { name, email, message } = formik.values;

    fetch("/api/send-mail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    }).then(async (res) => {
      const data: { error?: any } = await res.json();

      if (res.status === 200) {
        setAlertData({
          title: "Mensaje Enviado",
          type: "success",
          description:
            "Gracias por escribirnos, hemos recibido su mensaje y nos pondremos en contacto de nuevo con usted lo mas pronto posible",
          buttonTitle: "Continuar",
        });
        setAlertStatus("visible");

        setMessageStatus("sent");
        formik.resetForm();

        return;
      }

      if (res.status === 400) {
        setAlertData({
          title: "Error",
          type: "error",
          description: "Por favor verifique sus datos e intentelo nuevamente",
          buttonTitle: "Aceptar",
        });
        setAlertStatus("visible");

        setMessageStatus("default");

        return;
      }

      if (data.error) {
        setAlertData({
          title: "Error",
          type: "error",
          description:
            "Ha ocurrido un error y su mensaje no ha sido enviado, por favor intentelo de nuevo",
          buttonTitle: "Reintentar",
          buttonOnClick: () => {
            setAlertStatus("hidden");
            sendMail();
          },
        });
        setAlertStatus("visible");

        setMessageStatus("default");

        console.error(data.error)
      }
    });
  };

  //Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: () => {
      if (messageStatus === "default") sendMail();
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Por favor ingrese su nombre"),
      email: yup
        .string()
        .email("Ingrese una direccion de email valida")
        .required("Por favor ingrese su email"),
      message: yup
        .string()
        .trim()
        .required("Debe escribir un mensaje para continuar"),
    }),
  });

  return (
    <Section title="Contacto" className="contact">
      {alertStatus === "visible" && (
        <Alert
          type={alertData.type}
          title={alertData.title}
          description={alertData.description}
          buttonTitle={alertData.buttonTitle}
          buttonOnClick={
            alertData.buttonOnClick
              ? alertData.buttonOnClick
              : () => {
                  setAlertStatus("hidden");
                }
          }
          close={() => setAlertStatus("hidden")}
        />
      )}

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
        <form
          className={`form ${messageStatus}`}
          onSubmit={formik.handleSubmit}
        >
          <Input
            type="text"
            name="name"
            icon={faUser}
            placeholder="Nombre"
            error={formik.errors.name}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

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

          <Textarea
            name="message"
            placeholder="Escriba su mensaje"
            error={formik.errors.message}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Submit
            title={
              messageStatus === "sending"
                ? "Enviando..."
                : messageStatus === "sent"
                ? "Mensaje Enviado"
                : "Enviar Mensaje"
            }
            icon={
              messageStatus === "sending"
                ? faSpinner
                : messageStatus === "sent"
                ? faCheckCircle
                : faLocationArrow
            }
          />
        </form>
      </Article>

      <Copyright />
    </Section>
  );
}
