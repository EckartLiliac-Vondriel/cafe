import express from "express";
import cors from "cors";
import customerRoutes from "./routes/customer";
import menuRoutes from "./routes/menu";
import orderRoutes from "./routes/orders";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// API Routes
app.use("/api/customers", customerRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);

// Basic health check
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running normally" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Coffee Shop Backend running on http://localhost:${PORT}`);
});
