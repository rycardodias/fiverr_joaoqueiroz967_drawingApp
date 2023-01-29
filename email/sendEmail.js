const nodemailer = require('nodemailer');
const fs = require('fs');
const globals = require('../globals.json')

module.exports = function sendEmail(email, image) {
    return new Promise(function (resolve, reject) {
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


        transport.sendMail(message, function (error, info) {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
}
