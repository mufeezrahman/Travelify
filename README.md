# Travelify

Welcome to **Travelify**, a full-stack travel booking website. This project allows users to explore, book, and manage travel tours seamlessly. This README provides an overview of the project structure, technologies used, installation instructions, and more.

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Introduction
**Travelify** is a comprehensive web application designed to simplify the travel booking process. Users can search for tours, view detailed information, and make reservations directly through the platform.

## Technologies Used
- **Frontend:** ReactJS, HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **API:** RESTful API for communication between frontend and backend
  
## Output

  **Home Page:**
  ![image](https://github.com/user-attachments/assets/65fc9a42-8ce0-4cc6-9ed7-0ffd843a436a)

  Featured Tours:
  ![image](https://github.com/user-attachments/assets/02393a3d-054c-4ab9-b083-b6d2def3cfac)

  Experience:
  ![image](https://github.com/user-attachments/assets/be7c4086-ccba-43aa-b15c-bfe96b0454e0)

  Gallery:
  ![image](https://github.com/user-attachments/assets/d9d78cb7-c681-404b-be2a-270389fce34b)

  User Experience with Travelify:
  ![image](https://github.com/user-attachments/assets/c9b39d31-2fee-4b6a-aa41-1f08473168c2)

  NewsLetter:
  ![image](https://github.com/user-attachments/assets/ad4b40c8-c3b0-45de-9ef6-7afb35ed3b49)

  **Tours Page:**

  ![image](https://github.com/user-attachments/assets/f1063c0e-af0a-49d1-89d4-ede86bf3a7d9)

  **Login Page:**

  ![image](https://github.com/user-attachments/assets/bdc303ea-9483-4a44-9087-b98da808dc6f)

  **Registration page:**

  ![image](https://github.com/user-attachments/assets/4267d048-dde4-42bb-be80-d62031b38191)

## Project Structure
The project is organized as follows:

```plaintext
Travelify/
├── backend/
│   ├── Controllers/       # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── utils/             # Utility functions
│   ├── node_modules/      # Backend dependencies
│   ├── index.js           # Entry point of the Node.js application
│   ├── package.json       # Backend dependencies and scripts
│   └── package-lock.json  # Backend dependency tree
├── frontend/
│   ├── public/            # Static files
│   ├── src/               # React components and pages
│   ├── node_modules/      # Frontend dependencies
│   ├── package.json       # Frontend dependencies and scripts
│   ├── package-lock.json  # Frontend dependency tree
│   └── .gitignore         # Ignored files
└── .gitignore             # Ignored files


## Installation

To get started with **Travelify**, follow these steps:

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (ensure it's running on your local machine or you have access to a MongoDB Atlas cluster)

### Backend Setup

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Install the backend dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

    ```env
    MONGODB_URI=<your_mongodb_uri>
    JWT_SECRET=<your_jwt_secret_key>
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install the frontend dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

The frontend application will be available at `http://localhost:3000` and the backend server will run on `http://localhost8000` by default.

## Usage

Once both the frontend and backend servers are running, you can use the **Travelify** platform to:

- **Explore Tours:** Browse available travel tours and view detailed information.
- **Book Tours:** Select and book tours by providing necessary details.
- **Manage Reservations:** Access and manage your bookings from your user profile.
- **Search:** Use search functionality to find specific tours or destinations.

To test the API endpoints or interact with the backend, you can use tools like Postman or cURL. The API documentation is available at `http://localhost:5000/api-docs` if you have set up Swagger or a similar tool for documentation.

## Features

- **User Authentication:** Secure login and registration using JWT.
- **Tour Search and Filtering:** Advanced search and filtering options to find the best tours.
- **Booking System:** Seamless booking process with real-time availability updates.
- **User Profiles:** Manage personal information and view booking history.
- **Responsive Design:** Mobile-friendly interface ensuring a smooth experience on all devices.
- **Admin Dashboard:** Manage tours, users, and bookings from an admin panel (if implemented).



