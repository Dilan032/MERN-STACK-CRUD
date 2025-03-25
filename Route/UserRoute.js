const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

// Define the '/users' route
router.get('/', userController.getAllUsers);
router.post('/create', userController.createUser);

module.exports = router;
