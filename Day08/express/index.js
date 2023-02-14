const express = require("express");
const path = require("path");

const app = express();

// app.get("", (req, res) => {
//   console.log("data send by browser =--->>>>", req.query.name);
//   //   res.send("Hii this is home page" + req.query.name);
//   res.send(`<h1>Hii this is home page</h1>
//            <a href="/about">Click here to go to about page</a>
//   `);
// });

// app.get("/about", (req, res) => {
//   //   res.send("Hii this is about page");
//   res.send(`<input type="text" placeholder="Enter your name" value= ${req.query.name}/>
//             <button>Click me</button/>
//   `);
// });

// app.get("/help", (req, res) => {
//   res.send([
//     {
//       name: "Avinash",
//       email: "avinash@gmail.com",
//     },
//     {
//       name: "abhijeet",
//       email: "abhijeet@gmail.com",
//     },
//   ]);
// });

const publicPath = path.join(__dirname, "public");
// console.log(__dirname);

// app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.get("/profile", (_, res) => {
  const user = {
    name: "Avinash",
    email: "avinash@gmail.com",
    city: "Pune",
    skills: ["c++", "js", "node js", "reactjs"],
  };
  res.render("profile", { user });
});

app.get("/login", (_, res) => {
  res.render("login");
});

app.get("", (_, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (_, res) => {
  res.sendFile(`${publicPath}/help.html`);
});

app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/404.html`);
});

app.listen(3000);
