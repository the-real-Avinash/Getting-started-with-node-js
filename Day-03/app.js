//http is core built in http module of node js we have include it by this line of syntax
const http = require("http");
// const fs = require("fs");
const routes = require('./routes');

function rqListener(req, res) {
//   console.log(req.url, req.method, req.headers);
//   console.log(req);
  // res.write("Hello node js");

//   // Routing request
//   const url = req.url;
//   const method = req.method;
//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>My Message </title></head>");
//     res.write(
//       '<body><form action ="/message" method="POST"><input type="text" name="message"/><button>Send</button></form></body>'
//     );
//     res.write("</html>");
//     return res.end();
//   }

//   if (url === "/message" && method === "POST") {
//     const body = [];
//     req.on('data', (chunk) => {
//         console.log(chunk);
//         body.push(chunk);
//     })
//     req.on('end', () =>{
//         const parsedBody = Buffer.concat(body).toString();
//         console.log(parsedBody);
//         const message = parsedBody.split('=')[1];
//         fs.writeFileSync("message.txt", message);
//     })
    
//     res.statusCode = 302;
//     res.setHeader("Location", "/");
//     return res.end();
//   }

//   //response object
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My first page </title></head>");
//   res.write("<body><h1>Hello from node js</h1></body>");
//   res.write("</html>");
//   res.end();
  // process.exit();     //explicitly end the process  by invoking exit function
}

//create server with the help of http module which take function requestlistener with arguments request and response
const server = http.createServer(routes);

//excute our server on localhost 3000 //the server object listens on port 3000
server.listen(8080);
