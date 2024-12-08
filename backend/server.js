require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const teamsRoute = require('./routes/teams'); // Import the teams route

const app = express();

// Enable CORS for all routes
app.use(cors()); 
// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB using the connection string from the .env file
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Error connecting to the database', err));

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello World from Express Server!');
});

// Set up teams routes under /teams
app.use('/teams', teamsRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
