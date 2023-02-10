const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("Hello from first middleware");
//   next();
// });

// app.use((req, res, next) => {
//   res.write("<h1>Hello from my side</h1>");
// });

app.use("/", (req, res, next) => {
  console.log("Always run");
  next();
});

app.use("/users", (req, res, next) => {
  res.write("<h1>Hello from my side</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Hello from first middleware");
  res.write("<h1>Hello from assigment</h1>");
});

app.listen(8080);
