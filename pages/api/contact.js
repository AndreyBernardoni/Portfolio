require("dotenv").config();

export default async function (req, res) {
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

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `${req.body.name} | ${req.body.subject}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Entre em contato pelo email:
    ${req.body.email}</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        res.status(500).send("Erro ao enviar e-mail");
        console.error(err);
        reject(err);
      } else {
        res.status(200).send("Email enviado");
        console.log(info);
        resolve(info);
      }
    });
  });
}
