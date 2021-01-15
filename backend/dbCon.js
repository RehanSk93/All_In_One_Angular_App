const mongoose = require("mongoose");

// Data base URL, We are using atlas cloud database
const dbURL = "mongodb://localhost:27017/all-in-one-angular-app";

// Established Connection....
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// Export module for use outside
module.exports = mongoose;
