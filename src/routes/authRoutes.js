import express from "express";
import * as authController from "../controllers/authController.js";

const router = express.Router();

// Routes for authentication
router.post("/register", authController.register);
router.post("/login", authController.login);

export default router;
