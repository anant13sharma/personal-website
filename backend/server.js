require('dotenv').config(); // Load .env first

const express = require('express');
const mongoose = require('mongoose');
const useragent = require('useragent');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err.message));

// Schema to log visits
const visitSchema = new mongoose.Schema({
  time: { type: Date, default: Date.now },
  device: String,
  ip: String
});

const Visit = mongoose.model('Visit', visitSchema);

// Track visits
app.post('/track', (req, res) => {
  const agent = useragent.parse(req.headers['user-agent']);
  const device = `${agent.device.toString()} - ${agent.os.toString()} - ${agent.toAgent()}`;
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  console.log(`📥 Visit logged from ${ip} using ${device}`);

  const newVisit = new Visit({ device, ip });
  newVisit.save()
    .then(() => res.status(200).send('Tracked'))
    .catch(err => res.status(500).send(err.message));
});


// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Tracking server running on http://localhost:${PORT}`);
});
