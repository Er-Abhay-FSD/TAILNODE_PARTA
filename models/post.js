const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,       // Post title
  content: String,     // Post content
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',       // Reference to the User model
    required: true,
  },
  // You can add more fields here as needed
});

module.exports = mongoose.model('Post', postSchema);
