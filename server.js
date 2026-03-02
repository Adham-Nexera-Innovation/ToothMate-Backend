const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { configureMiddleware, configureErrorHandling } = require('./middleware/index.middleware');
const routes = require('./routes/index.routes');
const { swaggerSpec } = require('./config/swagger.config');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// Configure middleware
configureMiddleware(app);

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'Tooth Backend API Documentation'
}));

// Configure routes
app.use('/', routes);

// Configure error handling (must be last)
configureErrorHandling(app);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

