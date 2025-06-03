const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  employeeCode: String,
  items: [{
    title: String,
    price: String,
    available: Boolean,
    imageUrl: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
});

module.exports = mongoose.model("User", userSchema);
