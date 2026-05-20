import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/authRoute";
import userRoutes from "./routes/userRoute";

import { connectDatabase } from "./configs/database";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);

connectDatabase();

app.get("/", (req: Request, res: Response) => {
  res.send("Server running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});