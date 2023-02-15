const express = require("express");

const app = express();

const reqFilter = (req, res, next) => {
  //   console.log("reqFilter");
  if (!req.query.age) {
    res.send("Please Provide age");
  } else if (req.query.age < 18) {
    res.send("You are not allowed");
  } else {
    next();
  }
};

app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("<h1>Hello this is Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello this is About Page</h1>");
});
app.get("/help", (req, res) => {
  res.send("<h1>Hello this is Help Page</h1>");
});
app.listen(4000);
