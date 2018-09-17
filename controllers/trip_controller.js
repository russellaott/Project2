var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var trip = require("../models/trip.js");



// Export routes for server.js to use.
module.exports = router;
