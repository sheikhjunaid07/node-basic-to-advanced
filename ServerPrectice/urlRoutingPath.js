import http from "http";
import url from "url";

http
  .createServer((request, response) => {
    var urlObj = url.parse(request.url, true);
    var msg;

    var urlRoute =
      "<h1> Clink on the link below to redirect. <br><br><a href='/home'>Home Page</a><br><br><a href='/abut'>About Page</a></h1>";

    if (urlObj.pathname == "/") response.end();
  })
  .listen(8081);
console.log("Server Successfully invoked at http://localhost:8081");
