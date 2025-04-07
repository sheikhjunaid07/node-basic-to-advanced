import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
  response.send("<h1>/home url invoked visitor panel invoked.</h1>");
});

router.get("/about", (request, response) => {
  response.send("<h1>/about url invoked visitor invoked.</h1>");
});

router.get("/contact", (request, response) => {
  response.send("<h1>/contact url invoked visitor invoked.</h1>");
});

router.get("/register", (request, response) => {
  response.send("<h1>/register url invoked visitor invoked.</h1>");
});

export default router;
