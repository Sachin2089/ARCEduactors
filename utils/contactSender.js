const nodemailer = require("nodemailer");
require('dotenv').config();

const contactSender = async (name, email, workPlace, message) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth : {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
            secure : true, // Use secure connection (TLS)
        });

        let info = await transporter.sendMail({
            from :`<${process.env.MAIL_USER}>`,
            to : "arceducators@gmail.com",
            subject: 'New Contact Form Submission',
            text: `
            Name: ${name}
            Email: ${email}
            Work Place: ${workPlace}
            Message: ${message}
            `,
        });

        console.log(info.response);
        return info;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
};

module.exports = contactSender;
