const http = require("http");
const data = require("./data");

http
  .createServer((req, res) => {
    // res.write("<h1>Hello buddy its Node js </h1>");
    res.writeHead(200, { "Content-Type": "applicationjson" });
    res.write(JSON.stringify(data));
  })
  .listen(4000);
