const multer = require('multer');

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

/**
 * Configures multer for file uploads
 * Uses memory storage to handle files in memory
 * @returns {multer.Multer} Configured multer instance
 */
const configureUpload = () => {
  const storage = multer.memoryStorage();
  
  return multer({
    storage: storage,
    limits: {
      fileSize: MAX_FILE_SIZE
    }
  });
};

module.exports = {
  configureUpload,
  MAX_FILE_SIZE
};


