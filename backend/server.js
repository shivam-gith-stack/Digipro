const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const dbconnection = require("./database");

dotenv.config({ path: "./config.env" });

const app = express();

// ✅ CORS Setup
app.use(
  cors({
    origin: [
      "https://lumivex-growth.vercel.app",
      "https://www.lumivexgrowth.in",
      "https://lumivexgrowth.in",
      "http://localhost:5173" // optional: for local testing
    ],
    credentials: true,
  })
);

// ✅ Allow preflight requests
app.options("*", cors());

// ✅ Middleware
app.use(express.json());
app.use(bodyparser.json());

// ✅ Routes
const users = require("./router");
app.use("/api/v1", users);

// ✅ Chatbase Route
const chatbaseRoute = require("./chatbase");
app.use("/api/chat", chatbaseRoute);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  dbconnection();
  console.log(`✅ Server running on port ${PORT}`);
  console.log("✅ Database connection success");
});
