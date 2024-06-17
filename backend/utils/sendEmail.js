const nodeMailer = require("nodemailer");

// options object me email subject and message le rhe h
const sendEmail = async (options) => {
  // phle transporter bna rhe h jo ki mail leke jayega and ise bna rhe h with the help of nodemailer
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,   
    port: process.env.SMPT_PORT,  
    service: process.env.SMPT_SERVICE,  
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
