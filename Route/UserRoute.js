const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

// Define the '/users' route
router.get('/', userController.getAllUsers);
router.post('/create', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);

module.exports = router;
