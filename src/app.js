import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import "./cronjob.js";

const app = express();

// Middleware
app.use(bodyParser.json());

app.use(
   cors({
      origin: "*",
      methods: "*",
      credentials: true,
   })
);
app.use(morgan("tiny"));

// Health Check Route
app.get("/health-check", (req, res) => {
   res.json({ success: true, message: "Weather App Up!", data: null });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

export default app;
