const mongoose = require("mongoose");

const users = mongoose.Schema({
  name: { type: String },
  position: { type: String },
  company: { type: String },
  location: { type: String },
});

module.exports = mongoose.model("userDetails", users);
// "empDetails" is nothing but a collection name
