const express = require("express");
const cors = require("cors");
const mongoose = require("./database");
const Customize = require("./customizeSchema");
const multer = require("multer");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Multer setup for file handling
const storage = multer.memoryStorage(); // stores file in memory
const upload = multer({ storage });

// Upload route
app.post("/api/customizes", upload.single("image"), async (req, res) => {
  try {
    const { title, price, available } = req.body;
    const imageBuffer = req.file.buffer;
    const imageBase64 = imageBuffer.toString("base64");

    const newCustomize = new Customize({
      type: "default", // or use your own logic
      icecreams: [
        {
          id: Date.now(), // or any unique logic
          title,
          price,
          img: imageBase64,
          availability: available === "true" ? "yes" : "no",
          selected: false,
        },
      ],
    });

    await newCustomize.save();
    res.status(201).json({ message: "Upload successful", data: newCustomize });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
});

// GET route remains unchanged
app.get("/api/customizes", async (req, res) => {
  try {
    const customizes = await Customize.find();
    res.json(customizes);
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
