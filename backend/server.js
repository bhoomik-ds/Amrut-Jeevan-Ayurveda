import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import orderRoutes from "./routes/orderRoutes.js";

// Load .env
dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(express.json()); // <-- Required to parse JSON requests

// Routes
app.use("/api/orders", orderRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});