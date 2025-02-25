# MERN Stack Authentication System

This is a MERN (MongoDB, Express, React, Node.js) stack authentication system that provides user authentication features, including email verification, password reset, and session management.

## Features

- 🔧 **Backend Setup**
- 🗄️ **Database Setup**
- 🔐 **Signup Endpoint**
- 📧 **Sending Verify Account Email**
- 🔍 **Verify Email Endpoint**
- 📄 **Welcome Email Template**
- 🚪 **Logout Endpoint**
- 🔑 **Login Endpoint**
- 🔄 **Forgot Password Endpoint**
- 🔁 **Reset Password Endpoint**
- ✔️ **Check Auth Endpoint**

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/AIsTushar/Full-authentication-system-in-nodejs
   ```

2. Navigate to the project directory:

   ```sh
   cd Full-authentication-system-in-nodejs
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

## Backend Setup

1. Create a `.env` file in the `backend` directory and configure the following:

   ```env
   PORT=5000
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   MAILTRAP_TOKEN=your_mailtrap_token
   CLIENT_URL = Your_client_url
   ```

2. Start the backend server:
   ```sh
   npm run dev
   ```

## Database Setup

The system uses MongoDB for storing user credentials and authentication-related data. Ensure that MongoDB is installed and running, or use a cloud database like MongoDB Atlas.

## API Endpoints

### 🔐 Signup Endpoint

- **POST** `/api/auth/signup`
- Registers a new user and sends a verification email.

### 📧 Sending Verify Account Email

- Automatically triggered upon signup.

### 🔍 Verify Email Endpoint

- **GET** `/api/auth/verify/:token`
- Verifies the user’s email via the token sent.

### 📄 Welcome Email Template

- A predefined email template is sent upon successful verification.

### 🔑 Login Endpoint

- **POST** `/api/auth/login`
- Authenticates users with email and password.

### 🚪 Logout Endpoint

- **POST** `/api/auth/logout`
- Logs out the user and invalidates the session.

### 🔄 Forgot Password Endpoint

- **POST** `/api/auth/forgot-password`
- Sends a password reset link to the user's email.

### 🔁 Reset Password Endpoint

- **POST** `/api/auth/reset-password/:token`
- Allows users to reset their password via a secure token.

### ✔️ Check Auth Endpoint

- **GET** `/api/auth/check`
- Verifies if the user is authenticated.

## Running the Frontend

1. Ensure the backend is running.
2. Navigate to the `frontend` directory and start the React application:
   ```sh
   npm start
   ```

## Contributions

Contributions are welcome! Feel free to fork this repository and submit a pull request.
