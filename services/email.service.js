const { createEmailTransporter } = require('../config/email.config');
const { generateEmailTemplate, generateEmailSubject } = require('../utils/emailTemplate.util');
require('dotenv').config();

const RECIPIENT_EMAIL = 'adhamsaeed0500@gmail.com';

/**
 * Prepares email attachments from uploaded file
 * @param {Object} file - Multer file object
 * @returns {Array} Array of attachment objects
 */
const prepareAttachments = (file) => {
  if (!file) {
    return [];
  }

  return [
    {
      filename: file.originalname,
      content: file.buffer,
      contentType: file.mimetype
    }
  ];
};

/**
 * Sends email with contact form data
 * @param {Object} contactData - Contact form data
 * @param {string} contactData.name - Contact name
 * @param {string} contactData.phone - Contact phone
 * @param {string} contactData.service - Service requested
 * @param {Object} photoFile - Multer file object (optional)
 * @returns {Promise<Object>} Email send result
 */
const sendContactEmail = async ({ name, phone, service }, photoFile = null) => {
  const transporter = createEmailTransporter();
  const hasPhoto = !!photoFile;

  const mailOptions = {
    from: 'adhamsaeed0500@gmail.com',
    to: 'adhamsaeed0500@gmail.com',
    subject: generateEmailSubject(service),
    html: generateEmailTemplate({ name, phone, service, hasPhoto }),
    attachments: prepareAttachments(photoFile)
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
};

module.exports = {
  sendContactEmail
};


