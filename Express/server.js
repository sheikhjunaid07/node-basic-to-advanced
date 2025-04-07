import express from "express";
import url from "url";

const app = express();

app.get("/", (request, response) => {
  response.send("<h1>/ or /home url invoked.</h1>");
});

app.get("/about", (request, response) => {
  response.send("<h1>/about url invoked.</h1>");
});

app.get("/contact", (request, response) => {
  response.send("<h1>/contact url invoked.</h1>");
});

app.get("/service", (request, response) => {
  response.send("<h1>/service url invoked & method GET.</h1>");
});

app.post("/service", (request, response) => {
  response.send("<h1>/service url invoked & method POST.</h1>");
});

app.patch("/service", (request, response) => {
  response.send("<h1>/service url invoked & method PATCH.</h1>");
});

app.put("/service", (request, response) => {
  response.send("<h1>/service url invoked & method PUT.</h1>");
});

app.delete("/service", (request, response) => {
  response.send("<h1>/service url invoked & method DELETE.</h1>");
});
app.get("/login", (request, response) => {
  const urlObj = url.parse(request.url, true).query;
  // console.log(urlObj);
  console.log(urlObj.username);
  console.log(urlObj.password);

  response.send("<h1>/login url invoked.</h1>");
});

app.listen(3000);
console.log("Server started at http://localhost:3000");
