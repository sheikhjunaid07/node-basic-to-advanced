import express from "express";
import * as AdminController from "../controller/admin.controller.js";

const router = express.Router();

router.post("/saveAdmin", AdminController.saveAdmin);

export default router;
