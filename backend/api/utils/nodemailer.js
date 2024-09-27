const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs")

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});
const templatePath = path.join(__dirname, 'mailTemplates', 'emailTemplate.html');
let readHTML = fs.readFileSync(templatePath, 'utf-8')
const sendEmail = async (userInfo) => {
    for (const key in userInfo) {
        readHTML = readHTML.replace(`{{${key}}}`, userInfo[key])
    } 
    return await transporter.sendMail({
        from: 'noreply@example.com',
        to: process.env.MAIL_RECIPIENT,
        subject: 'Nueva consulta de cliente',
        text: '',
        html: readHTML,
    })
};
module.exports = { sendEmail }