// const http = require("http");
//url routing : it is a mechanism to redirect from one application url to another

import http from "http";

http
  .createServer((req, res) => {
    res.write("<h1>Hello From Server.</h1>");
    res.end();
  })
  .listen(8081);
console.log("Server invoked at link http://localhost:8081");
