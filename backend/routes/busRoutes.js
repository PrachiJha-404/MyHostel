// routes/busRoutes.js
const express = require('express');
const BusRoute = require('../models/BusRoute');
const router = express.Router();

// Get all bus routes
router.get('/api/bus-routes', async (req, res) => {
    try {
        const busRoutes = await BusRoute.find();  // Fetch all bus routes from the database
        res.json(busRoutes);  // Return the list of bus routes in JSON format
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bus routes' });
    }
});

// Update a specific bus route by ID
router.put('/api/bus-routes/:id', async (req, res) => {
    const { drop, pickup } = req.body;  // Get the updated data from the request body

    try {
        const updatedRoute = await BusRoute.findByIdAndUpdate(
            req.params.id,  // Find the bus route by ID
            { drop, pickup },  // Update drop and pickup times
            { new: true }  // Return the updated document
        );
        if (!updatedRoute) {
            return res.status(404).json({ message: 'Bus route not found' });
        }
        res.json(updatedRoute);  // Return the updated bus route
    } catch (error) {
        res.status(500).json({ message: 'Error updating bus route' });
    }
});

module.exports = router;
