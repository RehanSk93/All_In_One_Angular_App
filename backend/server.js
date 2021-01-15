const express = require("express");
const bodyParser = require("body-parser");

// Set your post no
const PORT = process.env.PORT | "3000";

// External file's
const dbCon = require("./dbCon");
const pagination = require("./controller/paginationController"); // Add this line

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS Implementation
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// List of POST Api is connected here
app.use("/pagination", pagination); // add this line

app.listen(PORT, () => console.log("Server started at PORT no", PORT));
