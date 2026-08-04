import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health check route — used to verify the server is running (Step 0 Verify)
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "TaskFlow API is running" });
});

// Routes will be mounted here as they're built:
// app.use("/api/auth", authRoutes);        // Step 2
// app.use("/api/projects", projectRoutes); // Step 3
// app.use("/api/tasks", taskRoutes);       // Step 4

app.listen(PORT, () => {
  console.log(`TaskFlow API listening on http://localhost:${PORT}`);
});
