import http from "http";
import url from "url";

http
  .createServer((req, res) => {
    var urlObj = url.parse(req.url, true);
    var msg;

    var urlRoute =
      "<h2>Click on the links below to redirect:</h2><a href='/home'>Home Page</a><br/><br/><a href='/about'>About Page</a><br/><br/><a href='/service'>Service Page</a><br/><br/><a href='/contact '>Contact Page</a><br/><br/><a href='/register '>Register Page</a><br/><br/><a href='/login '>Login Page</a><br/><br/>";

    if (urlObj.pathname == "/" || urlObj.pathname == "/home")
      msg = "<h1> / or /home url invoked. </h1>";  
    else if (urlObj.pathname == "/about") msg = "<h1>/about url invoked. </h1>";
    else if (urlObj.pathname == "/service")
      msg = "<h1> /service url invoked. </h1>";
    else if (urlObj.pathname == "/contact")
      msg = "<h1> /contact url invoked. </h1>";
    else if (urlObj.pathname == "/register")
      msg = "<h1> /register url invoked. </h1>";
    else if (urlObj.pathname == "/login") msg = "<h1>/login url invoked. </h1>";
    else msg = "<h1> Invalid URL invoked. </h1>";
    res.write(msg + urlRoute);
    res.end();
  })
  .listen(8081);
console.log("Server Started at http://localhost:8081");
