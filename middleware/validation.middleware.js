/**
 * Validates contact form request data
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware
 */
const validateContactForm = (req, res, next) => {
  const { name, phone, service } = req.body;

  if (!name || !phone || !service) {
    return res.status(400).json({
      success: false,
      message: 'Name, phone, and service are required'
    });
  }

  // Trim whitespace
  req.body.name = name.trim();
  req.body.phone = phone.trim();
  req.body.service = service.trim();

  // Validate non-empty after trim
  if (!req.body.name || !req.body.phone || !req.body.service) {
    return res.status(400).json({
      success: false,
      message: 'Name, phone, and service cannot be empty'
    });
  }

  next();
};

module.exports = {
  validateContactForm
};


