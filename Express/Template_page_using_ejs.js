import express from "express";

const app = express();

import ImportEjs from "./routes/index.routerForEjs.js";

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", ImportEjs);

app.listen(3000);
console.log("Server Invoked at http://localhost:3000");
