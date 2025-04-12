import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
  response.render("admin");
});
router.get("/editProfile", (request, response) => {
  response.render("editProfile");
});

router.get("/addCategory", (request, response) => {
  response.render("addCategory");
});

router.get("/addProduct", (request, response) => {
  response.render("addProduct");  
});

router.get("/addSubCategory", (request, response) => {
  response.render("addSubCategory");
});

router.get("/changePassword", (request, response) => {
  response.render("changePassword");
});

export default router;
