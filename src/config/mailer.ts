import nodemailer from "nodemailer";
import dotenv from 'dotenv';

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASSWORD,
  },
});

transporter.verify().then(()=>{
    console.log("Ready for send emails")
})