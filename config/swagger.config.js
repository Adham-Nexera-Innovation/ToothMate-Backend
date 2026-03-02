const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

/**
 * Swagger configuration options
 */
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tooth Backend API',
      version: '1.0.0',
      description: 'API documentation for Tooth Backend - Email Service',
      contact: {
        name: 'API Support',
        email: 'adhamsaeed0500@gmail.com'
      }
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Development server'
      }
    ],
    components: {
      schemas: {
        ContactForm: {
          type: 'object',
          required: ['name', 'phone', 'service'],
          properties: {
            name: {
              type: 'string',
              description: 'Contact name',
              example: 'John Doe'
            },
            phone: {
              type: 'string',
              description: 'Contact phone number',
              example: '1234567890'
            },
            service: {
              type: 'string',
              description: 'Service requested',
              example: 'Dental Cleaning'
            },
            photo: {
              type: 'string',
              format: 'binary',
              description: 'Photo attachment (optional)'
            }
          }
        },
        SuccessResponse: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true
            },
            message: {
              type: 'string',
              example: 'Email sent successfully'
            },
            messageId: {
              type: 'string',
              example: '<message-id@example.com>'
            }
          }
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false
            },
            message: {
              type: 'string',
              example: 'Failed to send email'
            },
            error: {
              type: 'string',
              example: 'Error message details'
            }
          }
        },
        ValidationErrorResponse: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false
            },
            message: {
              type: 'string',
              example: 'Name, phone, and service are required'
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js', './controllers/*.js', './server.js']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = {
  swaggerSpec,
  swaggerOptions
};


