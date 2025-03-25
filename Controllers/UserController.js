const user = require('../Model/UserModel');

const getAllUsers = async (req, res) => {   
    try {
        // get all users
        const users = await user.find();

        if (!users || users.length === 0) { // check if there is no user found
            console.log('No user found');
            return res.status(404).json({ message: 'No user found' });
        }
        res.status(200).json(users); // display all users

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} // end of getAllUsers


const createUser = async(req, res) => { 
    const { name, email, age } = req.body; // get the name, email, and age from the request body

    if(!name){ return res.status(400).json({ message: 'Name is required' }); } // check if name is empty
    if(!email){ return res.status(400).json({ message: 'Email is required' }); } // check if email is empty
    if(!age){ return res.status(400).json({ message: 'Age is required' }); } // check if age is empty    

    // check if the user email already exists
    const users = await user.find();
    const emailExists = users.find(u => u.email === email);
    if(emailExists){ return res.status(400).json({ message: 'Email already exists' }); } 
    
    const newUser = new user({ name, email, age }); // create a new user

    try {
        await newUser.save(); // save the new user
        res.status(201).json({message: 'User created successfully', newUser}); // display a success message

    } catch (error) {
        res.status(409).json({ message: error.message });
    }

} // end of create User


// get user by id
const getUserById = async (req, res) => {
    const { id } = req.params; // get the id from the request parameters

    if (!id) { // check if id is empty
        return res.status(400).json({ message: 'Id is required' });
    }

    try {
        const userById = await user.findById(id); // find the user by id

        if (!userById) { // check user id availability
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(userById); // display the user by id
    
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} // end of getUserById


// update user by id
const updateUserById = async (req, res) => {
    const { id } = req.params; // get the id from the request parameters
    const { name, email, age } = req.body; // get the name, email, and age from the request body

    if (!id) { // check if id is empty
        return res.status(400).json({ message: 'Id is required' });
    }

    try {
        // Find the user by id and update the fields
        const userById = await user.findByIdAndUpdate(id, { name, email, age }, 
        { new: true } // this returns the updated user document
        );

        if (!userById) { // check if the user was found and updated
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ message: 'User updated successfully', updateuserID: userById }); // return success message and updated user

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} // end of updateUserById


// delete user by id
const deleteUserById = async (req, res) => {
    const { id } = req.params; // get the id from the request parameters

    if (!id) { // check if id is empty
        return res.status(400).json({ message: 'Id is required' });
    }

    try {
        // Find the user by id and delete
        const userById = await user.findByIdAndDelete(id);

        if (!userById) { // check if the user was found and deleted
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ message: 'User deleted successfully', deletedUserID: userById }); // return success message and deleted user

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} // end of deleteUserById

exports.getAllUsers = getAllUsers;
exports.createUser = createUser;
exports.getUserById = getUserById;
exports.updateUserById = updateUserById;
exports.deleteUserById = deleteUserById;