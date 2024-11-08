const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json()); // Parses JSON requests


// Set up Infermedica API credentials from environment variables
const appId = process.env.APP_ID;
const appKey = process.env.APP_KEY;
console.log('App ID:', process.env.APP_ID);
console.log('App Key:', process.env.APP_KEY);

console.log('Fetching symptoms with headers:', {
  'App-Id': process.env.APP_ID,
  'App-Key': process.env.APP_KEY,
  'Content-Type': 'application/json',
  'Accept': 'application/json',
});

// Define the symptoms endpoint
app.get('/api/symptoms', async (req, res) => {
  const age = req.query.age || 25; // Default age if not provided
  try {
    console.log('Requesting symptoms with the following details:');
    console.log('URL:', `https://api.infermedica.com/v3/symptoms?age.value=${age}`);
    console.log('Headers:', {
      'App-Id': appId,
      'App-Key': appKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    const response = await axios.get(`https://api.infermedica.com/v3/symptoms?age.value=${age}`, {
      headers: {
        'App-Id': appId,
        'App-Key': appKey,
        'Content-Type': 'application/json',
      }
    });
    res.json(response.data); // Send symptoms data back to frontend
  } catch (error) {
    console.error('Error fetching symptoms:', error.response?.data || error.message);
    res.status(400).json({ message: error.response?.data?.message || 'Failed to fetch symptoms' });
  }
});

app.post("/api/diagnosis", async (req, res) => {
  try {
    const { sex, age, evidence } = req.body;
    console.log(evidence);
    // Making the POST request to Infermedica's Diagnosis API
    const response = await axios.post("https://api.infermedica.com/v3/diagnosis", {
      sex,
      age,
      evidence,
    }, {
      headers: {
        "App-Id": appId,
        "App-Key": appKey,
        "Content-Type": "application/json"
      }
    });

    console.log("Diagnosis API response:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error with Diagnosis API request:", error.response ? error.response.data : error.message);
    res.status(500).json({ message: "Failed to initiate diagnosis", error: error.response ? error.response.data : error.message });
  }
});

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
