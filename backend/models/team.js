const mongoose = require('mongoose');

// Define the player schema (for players in a team)
const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

// Define the team schema
const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
        unique: true
    },
    players: {
        type: [playerSchema], // Array of player objects
        required: true,
        validate: [arrayLimit, '{PATH} exceeds the limit of 11 players']
    }
});

// Limit the number of players to 11
function arrayLimit(val) {
    return val.length <= 11;
}

// Create the Team model
const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
