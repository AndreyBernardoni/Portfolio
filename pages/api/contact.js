require("dotenv").config();

export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    service: "outlook",
    secureConnection: false,
    tls: {
      ciphers: "SSLv3",
    },
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  const mailData = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `${req.body.name} | ${req.body.subject}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Entre em contato pelo email:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      res.status(500).send("Erro ao enviar e-mail");
    } else {
      res.status(200).send("Email enviado");
    }
  });
}
