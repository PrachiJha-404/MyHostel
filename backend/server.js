require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const Student = require('./models/Student');

// Middleware
app.use(cors({
    origin: "http://localhost:3001", // React app's URL
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(bodyParser.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Mongoose Schema and Model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    hostel: { type: String, required: true },
    password: { type: String, required: true }, 
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/sign-up', async (req, res) => {
    const { name, email, phone, passwd, hostel } = req.body;

    try {
        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(passwd, 10);

        // Create a new user
        const newUser = new User({
            name,
            email,
            phone,
            hostel,
            password: hashedPassword, // Save the hashed password here
        });

        // Save the user to the database
        await newUser.save();
        res.status(201).json({ message: 'Account created successfully!' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Student login route
app.post("/student-login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user in the database
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare the password with the hashed password stored in the database
        const isMatch = await bcrypt.compare(password, user.password); // Use 'password' here

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Login successful
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Server error", error });
    }
});


app.get('/api/students', async (req, res) => {
    console.log('Received request for /api/students'); // Log the request
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});


// Start the Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`); 
});
