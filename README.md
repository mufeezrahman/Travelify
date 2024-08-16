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
- [Contributing](#contributing)
- [License](#license)

## Introduction
**Travelify** is a comprehensive web application designed to simplify the travel booking process. Users can search for tours, view detailed information, and make reservations directly through the platform.

## Technologies Used
- **Frontend:** ReactJS, HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **API:** RESTful API for communication between frontend and backend
  
![image](https://github.com/user-attachments/assets/2a60df51-6939-43ce-892c-1217b28ebb2b)

![image](https://github.com/user-attachments/assets/445ac866-6014-4f17-87ee-ac5d3c7604a2)

![image](https://github.com/user-attachments/assets/956d07a4-3f93-4bc1-a321-e04671870b8e)

![image](https://github.com/user-attachments/assets/8ac39f56-48b7-4eeb-8510-327563e9f3c2)

![image](https://github.com/user-attachments/assets/8243e47f-e90e-40fb-8eda-438bf8f75e85)

![image](https://github.com/user-attachments/assets/cb23af1a-f9bf-44ea-b9a0-74594a7c4776)

![image](https://github.com/user-attachments/assets/998f3bfe-4000-4328-870c-b9ca81e29586)

![image](https://github.com/user-attachments/assets/87d90316-4bca-46f5-9f64-3943262c9a3e)

![image](https://github.com/user-attachments/assets/6cdd6886-9819-47f1-b7fb-e4e0475a8206)


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

The frontend application will be available at `http://localhost:3000` and the backend server will run on `http://localhost:5000` by default.

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



