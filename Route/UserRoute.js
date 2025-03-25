const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

// Define the '/users' route
router.get('/', userController.getAllUsers);

module.exports = router;
