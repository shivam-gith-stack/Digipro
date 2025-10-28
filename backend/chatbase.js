// chatbase.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const CHATBASE_API_KEY = process.env.APIKEY;
const CHATBASE_AGENT_ID = process.env.AGENTID;

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    // Setup connection to Chatbase API (with stream: true)
    const response = await axios.post(
      "https://www.chatbase.co/api/v1/chat",
      {
        messages: [{ role: "user", content: message }],
        chatId: CHATBASE_AGENT_ID,
        temperature: 0.7,
        stream: true, // Enable streaming mode
      },
      {
        headers: {
          Authorization: `Bearer ${CHATBASE_API_KEY}`,
          "Content-Type": "application/json",
        },
        responseType: "stream", // Important for streaming
      }
    );

    // Set headers for chunked streaming
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // Forward the Chatbase stream to frontend
    response.data.on("data", (chunk) => {
      const textChunk = chunk.toString();
      res.write(textChunk);
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

export default router;
