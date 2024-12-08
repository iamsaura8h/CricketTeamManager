const express = require('express');
const router = express.Router();
const Team = require('../models/team'); // Import the Team model

// 🟢 POST /teams - Create a new team
router.post('/', async (req, res) => {
  const { teamName, players } = req.body;

  if (!teamName || !players || players.length === 0) {
    return res.status(400).json({ message: "Team name and players are required." });
  }

  const newTeam = new Team({
    teamName,
    players
  });

  try {
    await newTeam.save();
    res.status(201).json({ message: "✅ Team created successfully!", team: newTeam });
  } catch (error) {
    console.error('❌ Error creating team:', error);
    res.status(500).json({ message: "Error creating team." });
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
