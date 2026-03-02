const nodemailer = require('nodemailer');
require('dotenv').config();

/**
 * Creates and configures the email transporter
 * @returns {nodemailer.Transporter} Configured email transporter
 */
const createEmailTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
};

module.exports = {
  createEmailTransporter
};


