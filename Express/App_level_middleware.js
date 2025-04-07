/*
Type - 1  Application Level Middleware
*/

import express from "express";
const app = express();

//application level middleware.
app.use("/", (request, response, next) => {
  console.log("Application level Middleware invoked");
  next();
});

app.get("/", (request, response) => {
  response.send("<h1>/ or /home url invoked.</h1>");
});

app.get("/about", (request, response) => {
  response.send("<h1>/about url invoked.</h1>");
});

app.listen(3000);
console.log("Server started at http://localhost:3000");
