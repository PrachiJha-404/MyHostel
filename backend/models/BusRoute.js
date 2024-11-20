// models/BusRoute.js
const mongoose = require('mongoose');

// Define the schema for the bus route
const busRouteSchema = new mongoose.Schema({
    drop: { type: String, required: true },     // Drop time for the bus route
    pickup: { type: String, required: true },   // Pickup time for the bus route
});

// Create the BusRoute model using the schema
const BusRoute = mongoose.model('BusRoute', busRouteSchema);

module.exports = BusRoute;
