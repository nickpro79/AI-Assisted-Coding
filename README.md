# REST API with JWT Authentication and SQLite

This is a simple REST API built with Express.js, featuring JWT authentication and user storage in a local SQLite database.

## Features

- User registration and login
- JWT token-based authentication
- Protected routes
- SQLite database for user data

## Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm start` to start the server on port 3000

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
  - Body: `{ "username": "string", "email": "string", "password": "string" }`

- `POST /auth/login` - Login
  - Body: `{ "email": "string", "password": "string" }`
  - Returns: `{ "message": "Login successful", "token": "jwt-token" }`

### Protected Routes

- `GET /protected` - Example protected route (requires Authorization header: `Bearer <token>`)

## Usage

Use tools like Postman or curl to test the endpoints.

Example login request:
```
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password"}'
```

Then use the token in subsequent requests.