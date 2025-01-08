const express = require("express");
const mongoose = require("mongoose");
const userData = require("./mongo"); // Assuming your schema is saved as 'mongo.js'

const app = express();

// Middleware
app.use(express.json()); // To parse JSON request bodies

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/CRUDAPP", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected successfully");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const { name, email, age } = req.body;
  try {
    const userAdded = await userData.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

app.post("/",async(req,res)=> {

  var { name , email , age } = req.body;
  const userData = require("./mongo");  
  const userData = await 

})


app.post("/users", async (req, res) => {
  try {
    const user = new userData(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
 