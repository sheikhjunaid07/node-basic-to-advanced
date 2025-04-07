/*
Type - 2  Route Level Middleware
*/

import express from "express";
const app = express();

//link router
import IndexRouter from "./routes/index.router.js";
import AdminRouter from "./routes/admin.router.js";

//Route level middleware.
app.use("/admin", AdminRouter);
app.use("/", IndexRouter);

app.listen(3000);
console.log("Server started at http://localhost:3000");
