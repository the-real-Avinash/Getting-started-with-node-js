// const express = require("express");
// const { MongoClient } = require("mongodb");
// // const Studentdata = require("./studentData");

const dbConnect = require("./mongodb");

// // const app = express();
// const url = "mongodb://0.0.0.0:27017/";      //localhost is not working here 
// const database = "classTen";
// const client = new MongoClient(url);

// async function dbConnect() {
//   //   console.log("Db started");
//   let result = await client.connect();
//   //   console.log("Db connect");
//   let db = result.db(database);
//   let collection = db.collection("student");
//   return collection;
//   let respose = await collection.find({name:'abhijeet'}).toArray();
//   console.log(respose);
//   console.log(collection.find({}).toArray());
// }

// query fire with the help of promises

dbConnect().then((res) => {
  res
    .find()
    .toArray()
    .then((data) => {
      console.log(data);
    });
});

//query with the help of Async await

// const main = async () => {
//   let data = await dbConnect();
//   data = await data.find().toArray();
//   console.log(data);
// };

// main();
