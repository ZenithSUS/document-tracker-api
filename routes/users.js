import express from "express";
import { getAllUsers, getUser, createUser, loginUser } from "../controllers/user-controller.js";

const router = express.Router();

// GET request 
router.get("/", getAllUsers);
router.get("/:id", getUser);

// POST request
router.post("/", createUser);

export default router;