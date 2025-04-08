import express from "express";
import path from "path";
import url from "url";

const app = express();

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

import MultiEjsPage from "./routes/router_for_multiple_ejs_pages.js";

app.set("view engine", "ejs");
app.set("views", "./views");

//middleware for load static pages/files(css, js, fonts, etc...)
const static_file_path = path.join(__dirname, "public");
app.use(express.static(static_file_path));

//middleware for EJS pages
app.use("/", MultiEjsPage);

app.listen(3000);
console.log("Server Started");
