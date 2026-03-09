const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ---------- MongoDB ----------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ---------- TEST ROUTE ----------
app.get("/", (req, res) => {
  res.send("Dhruvtara backend running 🚀");
});

// ---------- TRIP MODEL ----------
const TripSchema = new mongoose.Schema({
  userId: String,
  mode: String,
  destination: String,
  safetyIndex: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Trip = mongoose.model("Trip", TripSchema);

// ---------- START TRIP API ----------
app.post("/api/trip/start", async (req, res) => {
  try {
    const trip = await Trip.create(req.body);
    res.json({ success: true, trip });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ---------- SERVER ----------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
