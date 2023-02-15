const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "personal";
// const client = new MongoClient(url);

// const getData = async () => {
//   let result = await client.connect();
//   let db = result.db(database);
//   let collection = db.collection("products");
//   console.log(collection);
//   // let response = await collection.find({}).toArray();
//   // console.log(response);
// };
// getData();

MongoClient.connect(url, (err, database) => {
  if (err) {
    console.log(err);
  } else {
    db = database;
  }
  console.log(db);
});
