 // routes/userRoutes.js
 const express = require('express');
 const router = express.Router();
 const userController = require('../controllers/userController');
 
 // Define a route to get all users
 router.get('/', userController.getAllUsers);
 
 // Define a route to get a specific user by ID
 router.get('/:id', userController.getUserById);
 
 // Define a route to create a new user
 router.post('/', userController.createUser);
 
 // Define a route to update an existing user by ID
 router.put('/:id', userController.updateUser);
 
 // Define a route to delete a user by ID
 router.delete('/:id', userController.deleteUser);
 
 module.exports = router;
 
