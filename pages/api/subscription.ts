const nodemailer = require("nodemailer");
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const test = req.body.text;
  console.log("'''''");
  console.log(process.env.EMAIL);
  console.log(process.env.HOST);

  console.log("'''''");

  const transporter = await nodemailer.createTransport({
    host: process.env.HOST,
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.MAILPASSWORD,
    },
  });
  console.log("1");
  const mailOptions = {
    from: process.env.EMAIL,
    to: "new_mp@hotmail.com",
    subject: "Confirming Subscription",
    text: "Thank you for subscribing to my blog",
  };
  console.log("2");

  await transporter.sendMail(mailOptions, function (error: any, res: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent" + res.response);
      res.status(200).json({ status: "email sent" });
    }
  });
//  console.log("3");
//  setTimeout(() => {
//  }, 5000);
}
