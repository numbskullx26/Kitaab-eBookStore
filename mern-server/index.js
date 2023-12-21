const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello World!");
});

//mongoDB : connection using mongoClient

//mongoDB configuration

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://indrajeet:indrajeet@cluster0.trb0jtj.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a database
    const bookcollection = client.db("BookInventory").collection("books");

    //insert a book to the database : POST request
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const response = await bookcollection.insertOne(data);
      res.send(response);
    });

    //get all the books
    // app.get("/all-books", async (req, res) => {
    //   const books = bookcollection.find();
    //   const response = await books.toArray();
    //   res.send(response);
    // });

    //update book using patch or update request
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      //updatedBookData will be in the boy of the data which we will send from the client
      const updatedBookData = req.body;

      // Create a filter for movies with the id from params
      const filter = { _id: new ObjectId(id) };

      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...updatedBookData,
        },
      };

      const result = await bookcollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    //delete a book from the database
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      // Create a filter for movies with the id from params
      const filter = { _id: new ObjectId(id) };
      const result = await bookcollection.deleteOne(filter);
      res.send(result);
    });

    //find a book by filter
    app.get("/all-books", async (req, res) => {
      let query = {};

      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await bookcollection.find(query).toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(PORT, () => {
  console.log(`Server running on Port:{PORT}`);
});
