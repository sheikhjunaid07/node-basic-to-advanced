import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
  response.render("demo");
});

router.get("/about", (request, response) => {
  response.send("<h1>/about url invoked visitor invoked.</h1>");
});
export default router;
