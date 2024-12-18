
# Cricket Team Manager 🏏

![image](https://github.com/user-attachments/assets/69f777b3-857c-4a7d-8d8c-e0a29751c59a)


A full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to manage cricket teams. The application allows users to create, view, update, search, and delete teams.

## Features
- **Create a Team**: Add a new team with players.
- **View Teams**: Display all teams and their details.
- **Search Teams**: Search for teams by name.
- **Edit Team**: Update team details and players.
- **Delete Team**: Remove a team from the system.

## Tech Stack
- **Frontend**: React.js, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas or Compass)

## Setup Instructions

### Prerequisites

- Node.js (version 14 or later)
- MongoDB (either MongoDB Atlas for cloud or MongoDB Compass for local)

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install dependencies

Install dependencies for both frontend and backend:

#### For Backend
```bash
cd backend
npm install
```

#### For Frontend
```bash
cd ../frontend
npm install
```

### 3. Set up the Backend

#### MongoDB Atlas (cloud database):
1. Go to MongoDB Atlas and create a cluster.
2. Create a database and a collection for teams.
3. In the backend folder, create a `.env` file and add the following:

```bash
MONGO_URI=<your-mongodb-atlas-cluster-url>
PORT=5000
```

#### MongoDB Compass (local database):
1. Download and install MongoDB Compass.
2. Create a local database and a collection for teams.
3. In the backend folder, create a `.env` file and add the following:

```bash
MONGO_URI=mongodb://localhost:27017/cricket-team-manager
PORT=5000
```

### 4. Set up the Frontend

1. In the frontend folder, create a `.env` file and add the following (for environment variables like API URL):

```bash
REACT_APP_BACKEND_URL=http://localhost:5000
```

This will allow the frontend to communicate with the backend when both servers are running locally.

### 5. Run the project locally

#### Start the Backend Server:
```bash
cd backend
npm start
```

#### Start the Frontend Server:
```bash
cd frontend
npm run dev
```

The backend will run on `http://localhost:5000`, and the frontend will run on `http://localhost:5173`.

## Project Structure

```bash
/frontend
  ├── /src
  ├── App.js
  └── /components
/backend
  ├── /models
  ├── /routes
  ├── /controllers
  ├── server.js
  └── .env
```

## License

This project is licensed under the MIT License.

---

### Key Points:
- **Backend `.env` file**: 
  - Contains the `MONGO_URI` for connecting to the MongoDB database (either Atlas or local using Compass).
  - Also includes the `PORT` for running the backend server.
  
- **Frontend `.env` file**: 
  - Contains `REACT_APP_BACKEND_URL` which is used to define the backend API URL for the frontend to make API requests.

Make sure to replace `<repository-url>` with your actual GitHub repository URL. This should be ready for you to copy and paste.
