import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import users from "./routes/users.js";

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Authorization"],
}));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", users);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})