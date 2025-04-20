import express from "express";
import UserRouter from "./routes/user.router.js";
import AdminRouter from "./routes/admin.router.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", UserRouter);
app.use("/admin", AdminRouter);

app.listen(3001);
console.log("Server started at http://localhost:3001");
