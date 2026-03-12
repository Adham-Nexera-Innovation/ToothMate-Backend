const { sendContactEmail } = require('../services/email.service');

/**
 * Handles contact form email submission
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware
 */
const sendMail = async (req, res, next) => {
  try {
    const { name, phone, service } = req.body;
    const photo = req.file;

    const emailInfo = await sendContactEmail(
      { name, phone, service },
      photo
    );

    res.json({
      success: true,
      message: 'Email sent successfully',
      messageId: emailInfo.messageId
    });
  } catch (error) {
    console.log(error)
    next(error);
  }
};

module.exports = {
  sendMail
};

