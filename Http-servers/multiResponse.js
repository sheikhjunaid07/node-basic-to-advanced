// const http = require("http");
import http from "http";

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello From Server.</h1>");
    res.write("<h2>Multi Response From Server.</h2>");
    res.end();
  })
  .listen(8080);
console.log("Server invoked at link http://localhost:8080");
