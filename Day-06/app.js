// const http = require("http"); //http core module

const express = require("express"); //third party library (node js framework)
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./Routes/admin");
const shopRoutes = require("./Routes/shop");
const app = express(); //create our app with calling express as a function

app.use(bodyParser.urlencoded());

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //   res.status(400).send("<h1>Page not Found</h1>"); //catches extra failed routes  /dfkgjfkdj
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

//this is how we added middleware to express js application
// app.use((req, res, next) => {
//   //its get request, response, and next(is a function) as a argument
//   console.log("In the middleware");
//   next(); //allow the request to continue to next middleware
// });

// app.use((req, res, next) => {
//   console.log("In the anather middleware");
//   res.write("<h1>Hello from Node js </h1>");
// });

// console.log("Hello$$$$$$$$$$$$$$$$$$$$$$$$$$$", app);

// app.use("/", (req, res, next) => {
//   //   console.log("this always runs ");
//   res.write("<h1>Hello from Node js </h1>");
// });

// const server = http.createServer(app);

app.listen(8080);
