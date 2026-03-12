const nodemailer = require('nodemailer');
require('dotenv').config();

/**
 * Creates and configures the email transporter
 * @returns {nodemailer.Transporter} Configured email transporter
 */
const createEmailTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    service: "gmail",
    auth: {
      user: "adhamsaeed0500@gmail.com",
      pass: "ekpi egax wtso rkho"
    }
  });
};

module.exports = {
  createEmailTransporter
};



