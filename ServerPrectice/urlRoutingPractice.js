import http from "http";

http
  .createServer((request, response) => {
    var msg;
    if (request.url == "/" || request.url == "/home")
      msg = "<h1> /home url invoked. </h1>";
    else if (request.url == "/about") msg = "<h1> /about url invoked. </h1>";
    else if (request.url == "/contact")
      msg = "<h1> /contact url invoked. </h1>";
    else if (request.url == "/register")
      msg = "<h1> /register url invoked. </h1>";
    else if (request.url == "/service")
      msg = "<h1> /service url invoked. </h1>";
    else if (request.url == "/login") msg = "<h1> /login url invoked. </h1>";
    else msg = "<h1> Invalid URL invoked. </h1>";
    response.write(msg);
    response.end();
  })
  .listen(8081);
console.log("Server Started at http://localhost:8081");
