const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(express.static('.'));

// Read .env.local manually
const envFile = fs.readFileSync('.env.local', 'utf8');
const apiKey = envFile.match(/ANTHROPIC_API_KEY=(.+)/)?.[1]?.trim();

console.log('API Key loaded:', !!apiKey);
console.log('API Key prefix:', apiKey ? apiKey.substring(0, 12) : 'MISSING');

app.post('/api/generate', async (req, res) => {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: { message: err.message } });
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
  console.log('Open http://localhost:3000/index.html');
});