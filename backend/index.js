import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connect.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

dotenv.config();

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});

//
