import express from "express";
import * as UserController from "../controller/user.controller.js";

const router = express.Router();

router.post("/save", UserController.save);

router.get("/getData", UserController.getData);

export default router;
