const mongoose = require('mongoose');

// Define a schema for the email
const contactEmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  }
});

// Create a model based on the schema
module.exports = mongoose.model('ContactEmail', contactEmailSchema);

