const nodemailer = require('nodemailer');
const fs = require('fs');
const globals = require('../globals.json')

const { addObject } = require('./localDatabase')

module.exports = function sendEmail(email, image) {
    try {
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: globals.emailSender,
                pass: globals.emailPassword
            }
        });

        const message = {
            from: globals.emailSender,
            to: email,
            subject: globals.emailSubject,
            text: globals.emailText,
            attachments: [
                {
                    filename: image,
                    content: fs.readFileSync(globals.imagesFolder + image)
                }
            ]
        };

        transport.sendMail(message, (err, info) => {
            if (err) {
                console.log(err);
                addObject({ email, image })
            } else {
                console.log(info);
            }
        });
    } catch (error) {
        console.error(error);
        addObject({ email, image })
    }
}