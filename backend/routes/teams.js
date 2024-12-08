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

module.exports = router;
