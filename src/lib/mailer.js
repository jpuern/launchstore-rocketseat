const nodemailer = require('nodemailer')

module.exports =  nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "bb2287ac49299a",
      pass: "9765a03ef0b7d9"
    }
  });

