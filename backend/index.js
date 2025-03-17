import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cros from "cors";
import path from "path";

import { connectDB } from "./db/connect.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use(
  cros({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 5000;

dotenv.config();

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});

//
