const axios = require('axios');
const mongoose = require('mongoose');
const User = require('../models/user');
const Post = require('../models/post');
const { connectToDatabase } = require('../config/database');
const dotenv = require('dotenv');

dotenv.config();

const app_id = process.env.APP_ID;

// Function to clear user collection
async function clearUserData() {
  try {
    await User.deleteMany({});
    console.log('User collection cleared.');
  } catch (error) {
    console.error('Error clearing user collection:', error);
    throw error;
  }
}

// Function to fetch and store users
async function fetchAndStoreUsers() {
  try {
    await connectToDatabase(); // Connect to the database

    const response = await axios.get('https://dummyapi.io/data/v1/user', {
      headers: {
        'app-id': app_id,
      },
    });

    const users = response.data.data;

    await User.insertMany(users);

    console.log('Users data fetched and stored successfully');
  } catch (error) {
    console.error('Error fetching and storing users:', error);
    throw new Error('Failed to fetch and store users.');
  } finally {
    mongoose.connection.close(); // Close the database connection
  }
}

// Function to fetch and store posts for users
async function fetchAndStorePostsForUsers() {
  try {
    await connectToDatabase(); // Connect to the database

    const users = await User.find();

    for (const user of users) {
      console.log(`Fetching posts for user ${user.name}`);

      const response = await axios.get(`https://dummyapi.io/data/v1/user/${user.id}/post`, {
        headers: {
          'app-id': app_id,
        },
      });

      const posts = response.data.data;

      for (const postData of posts) {
        const newPost = new Post({
          title: postData.title,
          content: postData.content,
          userId: user._id,
        });

        await newPost.save();
      }

      console.log(`Posts data fetched and stored for user ${user.name}`);
    }

    console.log('All posts fetched and stored successfully');
  } catch (error) {
    console.error('Error fetching and storing posts:', error);
    throw new Error('Failed to fetch and store posts.');
  } finally {
    mongoose.connection.close(); // Close the database connection
  }
}

module.exports = {
  fetchAndStoreUsers,
  fetchAndStorePostsForUsers,
  clearUserData, // Add the clearUserData function to the exports
};
