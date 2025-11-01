const express = require("express");
const prerender = require("prerender-node");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const dbconnection = require("./database");
const users = require("./router");

dotenv.config({ path: "./config.env" });

const app = express();

prerender.set("prerenderToken", "d36CRx6aNtIrP9KXoQuR");
app.use(prerender);

// ✅ FIXED CORS SETUP
const allowedOrigins = [
  "https://lumivex-growth.vercel.app",
  "https://www.lumivexgrowth.in",
  "https://lumivexgrowth.in",
  "http://localhost:5173" // optional for local testing
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // ✅ Handle preflight OPTIONS requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.options("*", cors());

app.use(express.json());
app.use(bodyparser.json());

app.use("/api/v1", users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  dbconnection();
  console.log(`✅ Server running on port ${PORT} & Database connected`);
});
