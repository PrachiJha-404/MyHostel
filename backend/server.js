require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: "http://localhost:3001", // Allow the frontend to connect to this server
    methods: ["GET", "POST", "PUT"],
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

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    hostel: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Bus Route Schema
const busRouteSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    drop: { type: String, required: true },
    pickup: { type: String, required: true },
});

const BusRoute = mongoose.model('BusRoute', busRouteSchema);

// Routes

// User Signup
app.post('/sign-up', async (req, res) => {
    const { name, email, phone, passwd, hostel } = req.body;

    try {
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        const hashedPassword = await bcrypt.hash(passwd, 10);

        const newUser = new User({
            name,
            email: email.toLowerCase(),
            phone,
            hostel,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'Account created successfully!' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// User Login
app.post("/student-login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

// Get all students
app.get('/api/students', async (req, res) => {
    try {
        const students = await User.find({}, { password: 0 });
        res.json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all bus routes
app.get('/api/bus-routes', async (req, res) => {
    try {
        const busRoutes = await BusRoute.find();
        res.status(200).json(busRoutes);
    } catch (error) {
        console.error('Error fetching bus routes:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update a bus route by ID
app.put('/api/bus-routes/:id', async (req, res) => {
    const { id } = req.params;
    const { drop, pickup } = req.body;

    try {
        const busRoute = await BusRoute.findOne({ id });

        if (!busRoute) {
            return res.status(404).json({ message: 'Bus route not found' });
        }

        // Check if the new data is different from the current values
        if (busRoute.drop === drop && busRoute.pickup === pickup) {
            return res.status(400).json({ message: 'No changes made to bus route' });
        }

        const updatedRoute = await BusRoute.findOneAndUpdate(
            { id },
            { drop, pickup },
            { new: true }
        );

        res.status(200).json(updatedRoute);
    } catch (error) {
        console.error('Error updating bus route:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
