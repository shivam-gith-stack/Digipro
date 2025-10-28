const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const dbconnection = require("./database");

dotenv.config({ path: "./config.env" });

const app = express();

app.use(
  cors({
    origin: ["https://lumivex-growth.vercel.app" , "https://www.lumivexgrowth.in",
    "https://lumivexgrowth.in"],
    credentials: true,
  })
);
app.options("*", cors());
app.use(express.json());
app.use(bodyparser.json());

const users = require("./router");
app.use("/api/v1", users);

const chatbaseRoute = require("./chatbase");
app.use("/api/chat", chatbaseRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  dbconnection();
  console.log("✅ Database connection success");
});
