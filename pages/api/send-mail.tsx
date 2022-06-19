import type { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";

import nodemailer from "nodemailer";

import "dotenv/config";

async function main(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    //Validate user data using YUP
    const schema = yup.object().shape({
      name: yup.string().trim().required(),
      email: yup.string().email().required(),
      message: yup.string().trim().required(),
    });

    const isValid = await schema.isValid(req.body)
    
    if (!isValid) {
      res.status(400).json({error: "Please check the data and try again"});
      return;
    }

    const {
      EMAIL_USER,
      EMAIL_CLIENT_ID,
      EMAIL_CLIENT_SECRET,
      EMAIL_REFRESH_TOKEN,
    } = process.env;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: EMAIL_USER,
        clientId: EMAIL_CLIENT_ID,
        clientSecret: EMAIL_CLIENT_SECRET,
        refreshToken: EMAIL_REFRESH_TOKEN,
      },
    });

    const { name, email, message } = req.body;

    try {
      const info = await transporter.sendMail({
        from: email,
        to: "axele1524@gmail.com",
        subject: `Contacto | ${name}`,
        text: message,
        html: `
          <p style="font-size: 14px; line-height: 140%; color: #44566c; margin-bottom: 16px;">${message}</p>
          <p style="font-size: 14px; line-height: 140%; color: #44566c;">${name} - ${email}</p>
        `,
      });

      console.log("Message sent: %s", info.response);
      res.status(200).json({ error: null });
    } catch (error: any) {
      console.log("An Error Has Occurred: %s", error);
      res.status(502).json({ error });
    }
  }
}

export default main;
