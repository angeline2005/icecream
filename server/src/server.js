const express = require("express");
const cors = require("cors");
const mongoose = require("./database"); // Assuming you have a separate database connection file
const Customize = require("./customizeSchema"); // Assuming you have a Mongoose schema for Customize
const multer = require("multer");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Multer setup for file handling
const storage = multer.memoryStorage(); // stores file in memory
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Only image files are allowed"));
    }
    cb(null, true);
  },
});

// Upload route for customizing ice cream
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

// GET all individual ice cream photo entries
app.get("/api/customizes/photos", async (req, res) => {
  try {
    const all = await Customize.find();
    const allPhotos = all.flatMap((doc) =>
      doc.icecreams.map((item) => ({
        title: item.title,
        price: item.price,
        available: item.availability === "yes",
        imageBase64: item.img,
      })),
    );
    res.json(allPhotos);
  } catch (err) {
    console.error("Fetch error:", err);
    res
      .status(500)
      .json({ message: "Failed to fetch photos", error: err.message });
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
