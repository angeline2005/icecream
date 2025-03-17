const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/icecreamDB";


mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("error:", err));

module.exports = mongoose;
