const user = require('../Model/UserModel');

const getAllUsers = async (req, res) => {   
    try {
        // get all users
        const users = await user.find();

        // check if there is no user
        if (!users || users.length === 0) {
            console.log('No user found');
            return res.status(404).json({ message: 'No user found' });
        }
        // display all users
        res.status(200).json(users); 

    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

exports.getAllUsers = getAllUsers;