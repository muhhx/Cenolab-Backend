const nodemailer = require('nodemailer');

const user = process.env.NODEMAILER_USER
const pass = process.env.NODEMAILER_PASS

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: { user, pass }
})

module.exports = transporter
