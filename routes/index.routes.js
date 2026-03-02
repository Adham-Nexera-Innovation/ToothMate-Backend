const express = require('express');
const emailRoutes = require('./email.routes');

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Health check endpoint
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: API is running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Email API is running
 *                 endpoint:
 *                   type: string
 *                   example: POST /send-mail
 */
router.get('/', (req, res) => {
  res.json({
    message: 'Email API is running',
    endpoint: 'POST /send-mail',
    documentation: '/api-docs'
  });
});

router.use('/', emailRoutes);

module.exports = router;

