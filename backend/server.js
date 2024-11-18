const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection (replace with your MongoDB connection URL)
mongoose.connect('mongodb://localhost:27017/student_details', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Define the User schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    passwd: String,
    hostel: String
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// POST endpoint for signup
app.post('/sign-up', async (req, res) => {
    const { name, email, phone, passwd, hostel } = req.body;

    // Create a new user instance
    const newUser = new User({
        name,
        email,
        phone,
        passwd,
        hostel
    });

    try {
        // Save the user to the database
        await newUser.save();
        res.send('Account created successfully!');
    } catch (err) {
        res.status(500).send('Error saving account: ' + err.message);
    }
});

// Start the server
app.listen(3000, () => console.log('Server is running on port 3000'));
