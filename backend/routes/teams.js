const express = require('express');
const router = express.Router();
const Team = require('../models/team'); // Assuming you have a Team model defined



// POST /teams - Create a new team
router.post('/', async (req, res) => {
    const { teamName, players } = req.body;

    // Validate if all necessary fields are provided
    if (!teamName || !players || players.length === 0) {
        return res.status(400).json({ message: "Team name and players are required." });
    }

    // Create a new team object
    const newTeam = new Team({
        teamName,
        players
    });

    try {
        // Save the team to the database
        await newTeam.save();
        res.status(201).json({ message: "Team created successfully!", team: newTeam });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating team." });
    }
});

module.exports = router;
