const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number, // Define the data type for the age field
  // Add other user fields as needed
});

module.exports = mongoose.model('User', userSchema);
