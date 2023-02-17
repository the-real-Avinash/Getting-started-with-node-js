const express = require("express");
require("./config");
const playlist = require("./playlist");

const app = express();
app.use(express.json());

//post data to api
// app.post("/create", async (req, res) => {
//   const data = new playlist(req.body);
//   const result = await data.save();
//   console.log(result);
//   res.send(result);
// });

//read data from api
// app.get("/list", async (req, res) => {
//   let data = await playlist.find();
//   res.send(data);
// });

//delete data from api
// app.delete("/delete/:_id", async (req, res) => {
//   console.log(req.params);
//   let data = await playlist.deleteOne(req.params);
//   res.send(data);
// });

// app.put("/update/:_id", async (req, res) => {
//   let data = await playlist.updateOne(req.params, {
//     $set: req.body,
//   });
//   res.send(data);
// });

app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  let data = await playlist.find({
    $or: [
      { name: { $regex: req.params.key } },
      { album: { $regex: req.params.key } },
      { singer: { $regex: req.params.key } },
    ],
  });
  console.log(data);
});

app.listen(5000);
