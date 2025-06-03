const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./customizeSchema");
const Item = require("./customizeSchema"); // NEW

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/icecreamDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

// ✅ Signup Route (unchanged)
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password, employeeCode } = req.body;
    const user = new User({ name, email, password, employeeCode });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
});

// ✅ Login Route (unchanged)
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {
      res.status(200).json({ 
        success: true, 
        message: "Login successful"
      });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ 
      success: false, 
      message: "Login failed", 
      error: err.message 
    });
  }
});

// ✅ Add new item (no userId now)
app.post("/api/customizes", async (req, res) => {
  try {
    const { title, price, available, imageUrl } = req.body;

    const newItem = new Item({ title, price, available, imageUrl });
    await newItem.save();

    res.status(201).json({ 
      message: "Item added successfully", 
      item: newItem 
    });
  } catch (err) {
    console.error("Add item error:", err);
    res.status(500).json({ 
      message: "Failed to add item", 
      error: err.message 
    });
  }
});

// ✅ Get all items
app.get("/api/customizes", async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({ items });
  } catch (err) {
    console.error("Get items error:", err);
    res.status(500).json({ 
      message: "Failed to get items", 
      error: err.message 
    });
  }
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
