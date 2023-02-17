const express = require("express");
const mongodb = require("mongodb");
const dbConnect = require("./mongodb");

const app = express();

app.use(express.json()); //middleware to json data  //replaccement for body parser which is parse incoming request

//get API to show data from api(database)
app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
});

// POST API post data to database(api)
app.post("/", async (req, res) => {
  //   console.log(req.body);
  let data = await dbConnect();
  data = await data.insertOne(req.body);
  res.send(data);
});

//PUT API to update data we can update data through post method as well but PUT method is standard method to update

app.put("/:name", async (req, res) => {
  let data = await dbConnect();
  let result = data.updateOne({ name: req.params.name }, { $set: req.body });
  res.send({ result: "Update" });
});

//Delete API

app.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  const data = await dbConnect();
  const result = data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) }); //for delete operation we have addition step to pass id we need to get it from mongodb object    
  res.send("Delete successfully");
});

app.listen(4000);
