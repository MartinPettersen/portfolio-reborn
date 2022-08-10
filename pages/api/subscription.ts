const nodemailer = require("nodemailer");
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const test = req.body.text;
    console.log("'''''");
    console.log(test);
    console.log("'''''");

  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.MAILPASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: "new_mp@hotmail.com",
    subject: "Confirming Subscription",
    text: "Thank you for subscribing to my blog",
  };

  transporter.sendMail(mailOptions, function (error: any, res: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent" + res.response);
    }
  });

  res.status(200).json({ status: "email sent" });
}
