/**
 * Generates HTML email template for contact form submission
 * @param {Object} data - Contact form data
 * @param {string} data.name - Contact name
 * @param {string} data.phone - Contact phone
 * @param {string} data.service - Service requested
 * @param {boolean} hasPhoto - Whether photo is attached
 * @returns {string} HTML email template
 */
const generateEmailTemplate = ({ name, phone, service, hasPhoto }) => {
  return `
    <h2>New Dental Service Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Service:</strong> ${service}</p>
    ${hasPhoto ? '<p><strong>Photo:</strong> Attached</p>' : ''}
  `;
};

/**
 * Generates email subject line
 * @param {string} service - Service requested
 * @returns {string} Email subject
 */
const generateEmailSubject = (service) => {
  return `New Contact Form Submission - ${service}`;
};

module.exports = {
  generateEmailTemplate,
  generateEmailSubject
};


