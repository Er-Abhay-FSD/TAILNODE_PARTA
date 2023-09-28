const User = require('../models/user');

// Controller function to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching all users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
};

// Controller function to get a user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    res.status(500).json({ error: 'An error occurred while fetching the user.' });
  }
};

// Controller function to create a new user
const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required fields.' });
    }

    const newUser = new User({
      name,
      email,
      age,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error creating a new user:', error);
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
};

// Controller function to update a user by ID
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  try {
    if (!name) {
      return res.status(400).json({ error: 'Name is a required field for updating.' });
    }

    const updatedUser = await User.findByIdAndUpdate(id, {
      $set: {
        name,
        age,
      },
    }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating the user:', error);
    res.status(500).json({ error: 'An error occurred while updating the user.' });
  }
};

// Controller function to delete a user by ID
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndRemove(id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json(deletedUser);
  } catch (error) {
    console.error('Error deleting the user:', error);
    res.status(500).json({ error: 'An error occurred while deleting the user.' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
