const express = require('express');
const router = express.Router();
const Team = require('../models/team'); // Import the Team model


// 🟢 POST /teams - Create a new team
router.post('/', async (req, res) => {
  const { teamName, players } = req.body;

  if (!teamName || !players || players.length === 0) {
    return res.status(400).json({ message: "Team name and players are required." });
  }

  // Check if the team already exists (case-insensitive)
  const existingTeam = await Team.findOne({ teamName: new RegExp(`^${teamName}$`, 'i') });
  
  if (existingTeam) {
    return res.status(400).json({ message: `Team name '${teamName}' is already taken.` });
  }

  // Create a new team if not already exists
  const newTeam = new Team({
    teamName,
    players
  });

  try {
    await newTeam.save();
    res.status(201).json({ message: "✅ Team created successfully!", team: newTeam });
  } catch (error) {
    console.error('❌ Error creating team:', error); // Log the error to the console
    res.status(500).json({ message: "Error creating team.", error: error.message });
  }
});





// 🟢 GET /teams - Get all teams (with players)
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find(); 
    res.status(200).json(teams); 
  } catch (error) {
    console.error('❌ Error fetching teams:', error);
    res.status(500).json({ message: "Error fetching teams." });
  }
});

// 🟢 GET /teams/names - Get all team names only (no players)
router.get('/names', async (req, res) => {
  try {
    const teams = await Team.find({}, 'teamName'); 
    res.status(200).json({ teams }); 
  } catch (error) {
    console.error('❌ Error fetching team names:', error);
    res.status(500).json({ message: "Error fetching team names." });
  }
});


// 🟢 DELETE /teams/:teamName - Delete a team by team name
router.delete('/:teamName', async (req, res) => {
  const { teamName } = req.params;

  try {
    // Find the team by the provided team name (case-insensitive search)
    const team = await Team.findOneAndDelete({ teamName: new RegExp(`^${teamName}$`, 'i') });

    if (!team) {
      return res.status(404).json({ message: "Team not found." });
    }

    res.status(200).json({ message: "✅ Team deleted successfully!" });
  } catch (error) {
    console.error('❌ Error deleting team:', error);
    res.status(500).json({ message: "Error deleting team." });
  }
});





// 🟢 GET /teams/search - Search teams by name
router.get('/search', async (req, res) => {
  const { query } = req.query; // Get search query from the request (from frontend)

  if (!query) {
      return res.status(400).json({ message: "Search query is required." });
  }

  try {
      // Find teams that match the search query (case-insensitive)
      const teams = await Team.find({
          teamName: { $regex: query, $options: 'i' }, // 'i' makes it case-insensitive
      });

      if (teams.length === 0) {
          return res.status(404).json({ message: "No teams found" });
      }

      res.status(200).json({ teams }); // Return matching teams
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error searching for teams" });
  }
});

// 🟢 PUT /teams/:id - Update a team by ID (CORRECTED ROUTE)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { teamName, players } = req.body;

    // Validate input
    if (!teamName || !players || players.length === 0) {
      return res.status(400).json({ message: "Team name and players are required" });
    }

    // Update the team in the database
    const updatedTeam = await Team.findByIdAndUpdate(
      id, 
      { teamName, players }, 
      { new: true, runValidators: true }
    );

    if (!updatedTeam) {
      return res.status(404).json({ message: "Team not found" });
    }

    res.status(200).json(updatedTeam);
  } catch (error) {
    console.error('❌ Error updating team details:', error);
    res.status(500).json({ message: "Error updating team details" });
  }
});

// 🟢 GET /teams/:id - Get a specific team by ID with players
router.get('/:id', async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        if (!team) {
            return res.status(404).json({ message: "Team not found." });
        }
        res.status(200).json(team); // Send the full team details including players
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching team." });
    }
});

module.exports = router;