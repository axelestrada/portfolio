import "dotenv/config";

import * as yup from "yup";

import type { NextApiRequest, NextApiResponse } from "next";

import emailjs from "@emailjs/nodejs";

async function main(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    //Validate user data using YUP
    const schema = yup.object().shape({
      name: yup.string().trim().required(),
      email: yup.string().email().required(),
      message: yup.string().trim().required(),
    });

    const isValid = await schema.isValid(req.body);

    if (!isValid) {
      res.status(400).json({ error: "Please check the data and try again" });
      return;
    }

    const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, PRIVATE_KEY } = process.env;

    const { name, email, message } = req.body;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(SERVICE_ID || "", TEMPLATE_ID || "", templateParams, {
        publicKey: PUBLIC_KEY || "",
        privateKey: PRIVATE_KEY || "",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          res.status(200).json({ error: null });
        },
        (err) => {
          console.log("FAILED...", err);
          res.status(502).json({ err });
        }
      );
  }
}

export default main;
