require("dotenv").config(); // ✅ Ensure .env is loaded

const express = require("express");

// Debug: Check if environment variables are loaded
//console.log("Loaded environment variables:", process.env);

// Services
const productServices = require("./routes/inventory-route");
const posServices = require("./routes/pos-routes");
const authService = require("./routes/auth-routes");
const employeeService = require("./routes/employeeRoutes");

// Get the PORT from .env (use 5001 as a fallback)
const PORT = process.env.PORT || 5001;

// Request Mapper
const mapper = "/api/v1";

// Init App
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Register Routes
app.use(`${mapper}/inventory`, productServices);
app.use(`${mapper}/pos`, posServices);
app.use(`${mapper}/auth`, authService);
app.use(`${mapper}/employees`, employeeService);

// If No Request Matches
app.use((req, res) => {
  res.status(404).json({ error: "No such endpoint exists" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ ESB Server is running on port ${PORT}`);
});
