import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
  })
);

// Health check
app.get("/health", (req, res) => {
  res.send("API is running");
});

// Routes;
app.use("/api/auth", authRoutes);

export default app;
