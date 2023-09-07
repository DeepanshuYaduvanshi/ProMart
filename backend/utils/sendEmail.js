const nodeMailer = require("nodemailer");

// options object me email subject and message le rhe h
const sendEmail = async (options) => {
  // phle transporter bna rhe h jo ki mail leke jayega and ise bna rhe h with the help of nodemailer
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,   // gmail.com h btane ke liye
    port: process.env.SMPT_PORT,   // port isliye de rhe kyuki bahut baar mail nhi jaati h to port bta diya to isse chli jayegi and isme hmne gmail port diya h
    service: process.env.SMPT_SERVICE,  // gmail service bta rhe
    // is auth user se email send krenge 
    auth: {
      // user mail se mail send krenge forget password ki  and new email ki setting me jakr less secure app ko on kr dena h 
      user: process.env.SMPT_MAIL,
      // jis mail se mail send kr rhe uska password dena h taki mail send kr ske
      pass: process.env.SMPT_PASSWORD,
    },
  });

  // ab yha mail options bna rhe ki mail me kya dekhega user ko
  const mailOptions = {
    // jis mail se send kr rhe h
    from: process.env.SMPT_MAIL,
    // user ki  mail
    to: options.email,
    //subject kya dikhana h vo
    subject: options.subject,
    // mail body me message hoga 
    text: options.message,
  };
  // and yha hm transporter se mail send kr rhe h jisme mailoptions h 
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
