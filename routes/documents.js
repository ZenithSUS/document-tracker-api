import express from "express";
import { getAllDocuments, getDocument, createDocument } from "../controllers/document-controller.js";
const router = express.Router();

// GET request
router.get("/", getAllDocuments);
router.get("/:id", getDocument);

// POST request
router.post("/", createDocument);


export default router;
