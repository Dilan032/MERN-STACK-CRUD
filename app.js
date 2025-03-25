// DB password : mWFiDJtYQE4AXQ5Z

// express
const express = require('express');
const app = express();

// listen to port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('successful connection to the server!');
});

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user1:mWFiDJtYQE4AXQ5Z@cruddb.c18zv.mongodb.net/?appName=crudDB";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
