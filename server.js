import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import users from "./routes/users.js";
import documents from "./routes/documents.js";
import { logger } from "./middleware/logger.js";
import { notFound } from "./middleware/not-found.js";
import { error } from "./middleware/error.js";

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({
    origin: "*",
}));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use(logger);

app.use("/api/users", users);
app.use("api/documents", documents);

app.use(notFound);
app.use(error);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})