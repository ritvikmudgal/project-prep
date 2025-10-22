const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 3000;

// ✅ Enable CORS for all origins
app.use(cors({
  origin: '*',            // allow all origins (you can restrict later)
  methods: ['GET'],       // allow GET requests
  allowedHeaders: ['Content-Type']
}));

// ✅ Main route
app.get('/age/:name', async (req, res) => {
  const name = req.params.name;
  try {
    const response = await axios.get(`https://api.agify.io?name=${name}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Start server
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
