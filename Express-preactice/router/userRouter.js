import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
  response.render("home");
});

router.get("/about", (request, response) => {
  response.render("about");
});

router.get("/contact", (request, response) => {
  response.render("contact");
});

router.get("/service", (request, response) => {
  response.render("service");
});

router.get("/register", (request, response) => {
  response.render("register");
});

router.get("/login", (request, response) => {
  response.render("login");
});

export default router;
