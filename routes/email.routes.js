const express = require('express');
const { sendMail } = require('../controllers/email.controller');
const { validateContactForm } = require('../middleware/validation.middleware');
const { configureUpload } = require('../config/upload.config');

const router = express.Router();
const upload = configureUpload();

/**
 * @swagger
 * /send-mail:
 *   post:
 *     summary: Send email with contact form data
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/ContactForm'
 *           encoding:
 *             photo:
 *               contentType: image/jpeg, image/png, image/gif
 *     responses:
 *       200:
 *         description: Email sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationErrorResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post(
  '/send-mail',
  upload.single('photo'),
  validateContactForm,
  sendMail
);

module.exports = router;

