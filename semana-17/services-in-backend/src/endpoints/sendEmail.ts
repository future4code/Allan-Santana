import mailTransporter from "../services/mailTransporter";
import { Request, Response } from "express";

export const sendEmail = async (req: Request, res: Response) => {
  const { recepientEmail, subject, resume, bodyOfTheEmail } = req.body;

  try {
    if (!recepientEmail || !subject || !resume || !bodyOfTheEmail) {
      throw new Error("incomplete paramters.");
    }

    const tryToSendEmail: any = await mailTransporter
      .sendMail({
        from: `<${process.env.NODEMAILER_USER}>`,
        to: recepientEmail,
        subject: subject,
        text: resume,
        html: `<p>${bodyOfTheEmail}</p>`,
      })
      .then(console.log);

    res.status(200).send("Email enviado!");
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
