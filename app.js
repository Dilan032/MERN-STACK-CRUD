// express
const express = require('express');
const mongoose = require('mongoose');
const app = express();
// middleware
app.use(express.json());

// routes
const UserRoute = require('./Route/UserRoute');
// use the UserRoute 
app.use('/users', UserRoute);



// listen to port 3000
const port = 3000;

// connect to mongodb
mongoose.connect('mongodb+srv://user1:1imG9BYpvgjHpcBE@cruddb.c18zv.mongodb.net/')
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server only after the MongoDB connection is successful
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((error) => console.log(error.message));

app.get('/', (req, res) => {
    res.send('Successful connection to the server!');
});
