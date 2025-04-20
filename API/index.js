import express from "express";

const app = express();

import UserRouter from "./routes/user.router.js";
import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", UserRouter);

app.listen(3001);
console.log("Server Started at http://localhost:3001");
