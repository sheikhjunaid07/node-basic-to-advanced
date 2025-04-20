import express from "express";

const app = express();

import adminRoute from "./routers/adminPanel.js";
import bodyParser from "body-parser";

//configuration to fetch req body content : body parser middleware
//used to fetch req data from methods like : POST , PUT , PATCH , DELETE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", adminRoute);

app.listen(3000);
console.log(" Server started at http://localhost:3000");
