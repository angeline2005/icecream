const express = require("express");
const cors = require("cors");
const mongoose = require("./database");
const Customize = require("./customizeSchema");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));


app.use(express.json());

app.get("/api/customizes", async (req, res) => {
  try {
    const customizes = await Customize.find();
    res.json(customizes);
    console.log(customizes);
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
