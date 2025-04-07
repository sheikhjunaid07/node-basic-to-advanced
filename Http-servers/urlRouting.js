import http from "http";

http
  .createServer((req, res) => {
    var msg;

    var urlRoute =
      "<h2>Click on the links below to redirect:</h2><a href='/home'>Home Page</a><br/><br/><a href='/about'>About Page</a><br/><br/><a href='/service'>Service Page</a><br/><br/><a href='/contact '>Contact Page</a><br/><br/><a href='/register '>Register Page</a><br/><br/><a href='/login '>Login Page</a><br/><br/>";

    if (req.url == "/" || req.url == "/home")
      msg = "<h1> / or /home url invoked. </h1>";
    else if (req.url == "/about") msg = "<h1>/about url invoked. </h1>";
    else if (req.url == "/service") msg = "<h1> /service url invoked. </h1>";
    else if (req.url == "/contact") msg = "<h1> /contact url invoked. </h1>";
    else if (req.url == "/register") msg = "<h1> /register url invoked. </h1>";
    else if (req.url == "/login") msg = "<h1>/login url invoked. </h1>";
    else msg = "<h1> Invalid URL invoked. </h1>";
    res.write(msg + urlRoute);
    res.end();
  })
  .listen(8081);
console.log("Server Invoked at http://localhost:8081");
