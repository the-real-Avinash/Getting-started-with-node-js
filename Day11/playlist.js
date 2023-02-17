const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  album: String,
  singer: String,
});

module.exports = mongoose.model("playlist", playlistSchema);
