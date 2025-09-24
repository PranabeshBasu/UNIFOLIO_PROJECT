import nodemailer from "nodemailer";

export async function sendEmail({ host, port, user, pass, from, to, subject, text, html }) {
  const transporter = nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465,
    auth: { user, pass },
  });
  return transporter.sendMail({ from, to, subject, text, html });
}
