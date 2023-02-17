//mongoose package
const mongoose = require("mongoose");

//connection to database
mongoose.connect("mongodb://0.0.0.0:27017/youtube");
//schema to validate data
const PlaylistSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  album: String,
  singer: String,
});

// const saveInDb = async () => {
//   //model to connect our mongodb to nodejs
//   const playlistModel = mongoose.model("playlist", PlaylistSchema);
//   let data = new playlistModel({
//     name: "Born to shine",
//     rating: 10,
//     album: "Diljit dosanjh youtube",
//     singer: "Diljit dosanjh",
//   });
//   let result = await data.save();
//   console.log(result);
// };

// saveInDb();

// const updateInDB = async () => {
//   const playlistModel = mongoose.model("playlist", PlaylistSchema);
//   let data = await playlistModel.updateOne(
//     { name: "char bottle vodka" },
//     {
//       $set: { rating: 10, name: "blue eyes" },
//     }
//   );
//   console.log(data);
// };

// updateInDB();

const deleteInDB = async () => {
  const playlistModel = mongoose.model("playlist", PlaylistSchema);
  let data = await playlistModel.deleteOne({ name: "Born to shine" });
  console.log(data);
};

deleteInDB();
