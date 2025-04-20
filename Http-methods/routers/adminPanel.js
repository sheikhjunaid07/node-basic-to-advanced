import express from "express";
import url from "url";

const router = express.Router();

router.get("/", (request, response) => {
  const urlObj = url.parse(request.url, true).query;
  console.log(urlObj);

  response.send("<h1>/ or /admin url invoked.</h1>");
});

router.get("/manageusar", (request, response) => {
  response.send("<h1>/manageusar url invoked</h1>");
});

router.post("/manageusar", (request, response) => {
  console.log(request.body);
  response.send("<h1> /manageusar post method url invoked</h1>");
});

export default router;
