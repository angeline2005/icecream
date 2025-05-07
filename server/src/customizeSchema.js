const mongoose = require("./database");

const customizeSchema = new mongoose.Schema({
  id: Number,
  price: Number,
  img: String, // will store base64 image
  title: String,
  availability: String,
  selected: Boolean,
});

const customizeCategorySchema = new mongoose.Schema(
  {
    type: String,
    icecreams: [customizeSchema],
  },
  { collection: "customizes" }
);

const customize = mongoose.model("customize", customizeCategorySchema);
module.exports = customize;
