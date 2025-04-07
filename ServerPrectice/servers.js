import http from "http";
import url from "url";

http
  .createServer((req, res) => {
    var urlObj = url.parse(req.url, true);
    var msg;

    var urlRoute =
      "<h2>Click on the link below to redirect</h2><a href='/home'>Home page</a><br/><br/><a href='/about'>About page</a><br/><br/><a href='/contact'>Contact page</a><br/><br/><a href='/service'>Service page</a><br/><br/><a href='/register'>Register page</a><br/><br/><a href='/login'>Login page</a>";

    if (urlObj.pathname == "/" || urlObj.pathname == "/home")
      msg = "<h1>/ or /home invoked.</h1>";
    else if (urlObj.pathname == "/about") msg = "<h1>/about invoked.</h1>";
    else if (urlObj.pathname == "/contact") msg = "<h1>/contact invoked.</h1>";
    else if (urlObj.pathname == "/service") msg = "<h1>/service invoked.</h1>";
    else if (urlObj.pathname == "/register") msg = "<h1>/service invoked.</h1>";
    else if (urlObj.pathname == "/login") {
      const users = urlObj.query;
      console.log("Username: " + users.username);
      console.log("Password: " + users.password);

      msg = "<h1>/login invoked.</h1>";
    } else msg = "Invalid url invoked.";

    res.write(msg + urlRoute);
    res.end();
  })
  .listen(8081);
console.log(" Server Invoked at http://localhost:8081");
