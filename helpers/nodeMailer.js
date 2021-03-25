const nodemailer = require("nodemailer")

function sendEmail(user, email) {

  //Step 1: Creating the transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "musicomersproject@gmail.com",
      pass: "pairProject123!"
    }
  })

  //Step 2: Setting up message options
  const messageOptions = {
  subject: "Registered To MeetUp Apps",
  text: `Congratulation ${user} You have join to MeetUp Apps`,
  to: email,
  from: "musicomersproject@gmail.com"
  }

  //Step 3: Sending email
  transporter.sendMail(messageOptions);
}

module.exports = sendEmail