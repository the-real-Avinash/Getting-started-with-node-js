const { MongoClient } = require("mongodb");
// const Studentdata = require("./studentData");

// const app = express();
const url = "mongodb://0.0.0.0:27017/";
const database = "classTen";
const client = new MongoClient(url);

async function dbConnect() {
  //   console.log("Db started");
  let result = await client.connect();
  //   console.log("Db connect");
  let db = result.db(database);
  let collection = db.collection("student");
  return collection;
}

module.exports = dbConnect;
