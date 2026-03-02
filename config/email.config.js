const nodemailer = require('nodemailer');
require('dotenv').config();

/**
 * Creates and configures the email transporter
 * @returns {nodemailer.Transporter} Configured email transporter
 */
const createEmailTransporter = () => {
  return nodemailer.createTransport({
    // host: process.env.MAIL_HOST,
    // port: process.env.MAIL_PORT,
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
};

module.exports = {
  createEmailTransporter
};


