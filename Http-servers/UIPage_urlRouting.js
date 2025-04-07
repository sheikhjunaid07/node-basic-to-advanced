import http from "http";
import fs from "fs";
import url from "url";

http
  .createServer((req, res) => {
    var pathname = url.parse(req.url, true).pathname;
    var file_content;

    if (pathname == "/") file_content = fs.readFileSync("./views/home.html");
    else if (pathname == "/about")
      file_content = fs.readFileSync("./views/about.html");
    else if (pathname == "/contact")
      file_content = fs.readFileSync("./views/contact.html");
    else if (pathname == "/service")
      file_content = fs.readFileSync("./views/service.html");
    else if (pathname == "/register")
      file_content = fs.readFileSync("./views/register.html");
    else if (pathname == "/login")
      file_content = fs.readFileSync("./views/login.html");
    else file_content = fs.readFileSync("./views/PNF.html");
    res.write(file_content);
    res.end();
  })
  .listen(8081);
console.log("server started at http://localhost:8081");
