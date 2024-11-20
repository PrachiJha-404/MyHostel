const mongoose = require('mongoose');

// Define the schema for the student
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    hostel: { type: String, required: true },
    password: { type: String, required: true },  // You would hash this in production
});

// Create the model using the schema
const Student = mongoose.model('Student', studentSchema);

// Export the model to use it in other files
module.exports = Student;
