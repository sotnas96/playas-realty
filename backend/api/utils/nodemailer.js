const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});
const sendEmail = async ({ userInfo }) => {
    return await transporter.sendMail({
        from: 'noreply@example.com',
        to: process.env.MAIL_RECIPIENT,
        subject: 'New client inquerie',
        text: '',
        html: '<h1>Hola probando</h1>',
    })
};
module.exports = { sendEmail }