# Tooth Backend - Email Service

Express backend for sending emails with contact form data. Built with clean code principles and single responsibility pattern.

## Project Structure

```
tooth-back/
├── config/              # Configuration files
│   ├── email.config.js  # Email transporter configuration
│   ├── swagger.config.js # Swagger API documentation configuration
│   └── upload.config.js # File upload configuration
├── controllers/         # Request handlers
│   └── email.controller.js
├── middleware/          # Express middleware
│   ├── errorHandler.middleware.js
│   ├── index.middleware.js
│   └── validation.middleware.js
├── routes/              # Route definitions
│   ├── email.routes.js
│   └── index.routes.js
├── services/            # Business logic
│   └── email.service.js
├── utils/               # Utility functions
│   └── emailTemplate.util.js
└── server.js            # Application entry point
```

## Architecture

The project follows clean code principles with separation of concerns:

- **Config**: Configuration and setup (email, upload)
- **Controllers**: Handle HTTP requests/responses
- **Services**: Business logic and external integrations
- **Middleware**: Request validation and error handling
- **Routes**: Route definitions and middleware composition
- **Utils**: Reusable utility functions

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
PORT=3000
```

**Important:** For Gmail, you need to use an App Password, not your regular password:
- Go to your Google Account settings
- Enable 2-Step Verification
- Generate an App Password for "Mail"
- Use that App Password in the `.env` file

## Running the Server

```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

## API Documentation (Swagger)

Once the server is running, you can access the interactive API documentation at:

**http://localhost:3000/api-docs**

The Swagger UI provides:
- Complete API endpoint documentation
- Request/response schemas
- Try-it-out functionality to test endpoints directly
- Example requests and responses

## API Endpoint

### POST /send-mail

Send an email with contact form data.

**Request:**
- Method: POST
- Content-Type: multipart/form-data
- Body:
  - `name` (string, required): Contact name
  - `phone` (string, required): Contact phone number
  - `service` (string, required): Service requested
  - `photo` (file, optional): Photo attachment

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "..."
}
```

**Example using curl:**
```bash
curl -X POST http://localhost:3000/send-mail \
  -F "name=John Doe" \
  -F "phone=1234567890" \
  -F "service=Dental Cleaning" \
  -F "photo=@/path/to/photo.jpg"
```

**Example using JavaScript (FormData):**
```javascript
const formData = new FormData();
formData.append('name', 'John Doe');
formData.append('phone', '1234567890');
formData.append('service', 'Dental Cleaning');
formData.append('photo', fileInput.files[0]);

fetch('http://localhost:3000/send-mail', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => console.log(data));
```

