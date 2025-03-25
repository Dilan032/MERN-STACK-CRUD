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
    
    const newUser = new user({ name, email, age }); // create a new user

    try {
        await newUser.save(); // save the new user
        res.status(201).json(newUser);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }

} // end of create User

exports.getAllUsers = getAllUsers;
exports.createUser = createUser;