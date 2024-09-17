# Task Management Application

This is a full-stack **Task Management Application** built using the **MERN (MongoDB, Express, React, Node.js)** stack. It allows users to **create**, **view**, **update**, and **delete** tasks. The application is designed to handle tasks with a title, description, status (e.g., In Progress, Completed), and due date.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Create Tasks**: Add tasks with important details such as title, description, status, and due date.
- **View Tasks**: List all tasks with their current status and due dates.
- **Update Tasks**: Modify existing task details, including changing the status (e.g., from "In Progress" to "Completed").
- **Delete Tasks**: Remove tasks when they are no longer needed.
  
## Technologies Used

- **Frontend**: React (Hooks, functional components)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose for schema management)
- **HTTP Client**: Fetch API for data fetching
- **Styling**: Basic CSS with utility classes

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **MongoDB** (Local instance or a cloud-based solution like MongoDB Atlas)
  
## Installation

Follow these steps to set up and run the application locally:

### Backend Setup

1. **Clone the repository**:
   git clone <repository-url>
   cd <repository-folder>


2. **Install backend dependencies**:
   npm install

3. **Set up environment variables**:
   - Create a `.env` file in the `backend` directory and add your MongoDB URI and port configuration:
   MONGO_URI=<your-mongodb-uri>
   PORT=4000


4. **Run the backend server**:
  
   npm start
   The server will run on `http://localhost:4000`.

### Frontend Setup



1. **Install frontend dependencies**:

   npm install


2. **Run the frontend application**:

   npm start

   The React app will run on `http://localhost:5173`.

## API Endpoints

The backend API exposes the following endpoints:

- **GET** `/api/v1/tasks`  
  Fetch all tasks from the database.

- **POST** `/api/v1/create`  
  Create a new task.

- **PUT** `/api/v1/update/:id`  
  Update an existing task by ID.

- **DELETE** `/api/v1/delete/:id`  
  Delete a task by ID.

## Usage

Once the setup is complete:

1. **Access the frontend** by opening a browser and navigating to `http://localhost:5173`.
2. Use the interface to:
   - Add new tasks by filling out the form.
   - View tasks on the main dashboard.
   - Edit tasks by clicking the "Update" button.
   - Delete tasks using the "Delete" button.

### Task Properties

- **Title**: The name of the task.
- **Description**: Details about the task.
- **Status**: Either "In Progress" or "Completed".
- **Due Date**: The deadline for completing the task.

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create a new branch for your feature or bug fix:  
   git checkout -b feature/my-feature

3. Commit your changes:  
   git commit -m "Add new feature"

4. Push to the branch:  
   git push origin feature/my-feature
 
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
