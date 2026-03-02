const cors = require('cors');
const express = require('express');
const { errorHandler } = require('./errorHandler.middleware');

/**
 * Configures and returns Express middleware
 * @param {express.Application} app - Express application instance
 */
const configureMiddleware = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

/**
 * Configures error handling middleware
 * Must be called after all routes
 * @param {express.Application} app - Express application instance
 */
const configureErrorHandling = (app) => {
  app.use(errorHandler);
};

module.exports = {
  configureMiddleware,
  configureErrorHandling
};


