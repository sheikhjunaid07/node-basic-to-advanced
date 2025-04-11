import express from "express";
import url from "url";
import path from "path";

const app = express();

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

import AdminRouter from "./router/adminRouter.js";
import UserRouter from "./router/userRouter.js";

app.set("view engine", "ejs");

//middleware for static files
const static_file_path = path.join(__dirname, "public");
app.use(express.static(static_file_path));

app.use("/admin", AdminRouter);
app.use("/", UserRouter);

app.listen(3000);
console.log("Server Started at http://localhost:3000");

//router.set("views", path.join(__dirname, "../views/admin"));
//router.set("views", path.join(__dirname, "../views/user"));

// app.set("views", path.join(__dirname, "views"));
