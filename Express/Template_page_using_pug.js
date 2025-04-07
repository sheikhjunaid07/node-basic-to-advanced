import express from "express";
const app = express();

//link router
import IndexRouterPug from "./routes/index.routerforPug.js";

//middleware to load template pages & template engine
app.set("view engine", "pug");
app.set("views", "./views");

//Route level middleware.
app.use("/", IndexRouterPug);

app.listen(3000);
console.log("Server started at http://localhost:3000");
