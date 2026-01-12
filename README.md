# Library Management System (Backend)

Backend for a university digital library system built with:

- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Features
- Role-based authentication (Student, Tutor, Admin)
- Digital library resources
- Student borrowing system
- Personal borrowing history
- Secure JWT access & refresh tokens

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   npm install
3. Create a `.env` file:
   PORT=5000
   MONGO_URI=your_mongodb_uri
   ACCESS_TOKEN_SECRET=your_access_secret
   REFRESH_TOKEN_SECRET=your_refresh_secret
4. Run the server:
   npm run dev

## API Base URL
`http://localhost:5000/api`
