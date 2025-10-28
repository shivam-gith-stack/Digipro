const express = require("express")
const axios = require("axios")
const dotenv = require("dotenv")
dotenv.config();

const router = express.Router();

const CHATBASE_API_KEY = process.env.APIKEY;
const CHATBASE_AGENT_ID = process.env.AGENTID;

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await axios.post(
      "https://www.chatbase.co/api/v1/chat",
      {
        messages: [{ role: "user", content: message }],
        chatId: CHATBASE_AGENT_ID,
        temperature: 0.7,
        stream: true,
      },
      {
        headers: {
          Authorization: `Bearer ${CHATBASE_API_KEY}`,
          "Content-Type": "application/json",
        },
        responseType: "stream",
      }
    );

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    response.data.on("data", (chunk) => {
      res.write(chunk.toString());
    });

    response.data.on("end", () => {
      res.end();
    });

    response.data.on("error", (err) => {
      console.error("Stream error:", err);
      res.end();
    });
  } catch (error) {
    console.error("Error from Chatbase:", error.response?.data || error.message);
    res.status(500).json({
      error: "Failed to connect to Chatbase",
      details: error.response?.data || error.message,
    });
  }
});

// ✅ Add this line to export the router
module.exports = router;
