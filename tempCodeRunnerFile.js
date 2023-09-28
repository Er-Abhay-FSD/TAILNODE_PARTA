const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const databaseConfig = require('./config/database');
const { fetchAndStoreUsers, fetchAndStorePostsForUsers, clearUserData } = require('./scripts/fetchData'); // Import clearUserData function
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests

// Connect to the database
mongoose.connect(databaseConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('🟢 Connected to MongoDB');

    // Clear existing data in the "users" collection
    await clearUserData(); // Call clearUserData function

    // Call the functions to fetch and store data when the database connection is successful
    await fetchAndStoreUsers();
    await fetchAndStorePostsForUsers();

    console.log('🟢 Data fetching and storing completed');
  })
  .catch((error) => {
    console.error('🔴 Error connecting to MongoDB:', error);
    process.exit(1);
  });

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
