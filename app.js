const express = require('express');
const { connectToDatabase } = require('./config/database'); // Import connectToDatabase function
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const { fetchAndStoreUsers, fetchAndStorePostsForUsers, clearUserData } = require('./scripts/fetchData');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests

// Call the connectToDatabase function to establish the database connection
(async () => {
  try {
    await connectToDatabase(); // Call connectToDatabase function
    console.log('🟢 Connected to MongoDB');

    // Clear existing data in the "users" collection
    await clearUserData(); // Call clearUserData function

    // Call the functions to fetch and store data when the database connection is successful
    await fetchAndStoreUsers();
    await fetchAndStorePostsForUsers();

    console.log('🟢 Data fetching and storing completed');
  } catch (error) {
    console.error('🔴 Error connecting to MongoDB:', error);
    process.exit(1);
  }
})();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
