import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
  response.send("<h1>/admin url invoked admin panel invoked.</h1>");
});

router.get("/manageuser", (request, response) => {
  response.send("<h1>/manageuser url invoked admin panel invoked.</h1>");
});

router.get("/epuser", (request, response) => {
  response.send("<h1>/epuser url invoked admin panel invoked.</h1>");
});

router.get("/cpuser", (request, response) => {
  response.send("<h1>/cpuser url invoked admin panel invoked.</h1>");
});

export default router;
