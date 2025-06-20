const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

require("dotenv").config();
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) =>
      fetch(...args, { timeout: 5000 }) // 5 second timeout
    );

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "app.html")); 
});

app.get("/api/apod", async (req, res) => {
  const { date } = req.query;
  const apiKey = process.env.NASA_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "API key missing" });
  }

  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
  console.log(`🔍 Requesting: ${url}`);

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("❌ Fetch error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

  
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
