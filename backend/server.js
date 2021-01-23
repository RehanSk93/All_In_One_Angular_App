const express = require("express");
const bodyParser = require("body-parser");
const upload = require("express-fileupload"); // Upload Files

// Set your post no
const PORT = process.env.PORT | "3000";

// External file's
const dbCon = require("./dbCon");
const CRUD = require("./controller/create-read-update-delete"); // CRUD
const pagination = require("./controller/paginationController"); // Pagination
const file_upload_download = require("./controller/file-upload-download"); // File upload download
const search_items = require("./controller/search-items"); // Search items

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(upload()); // Upload Files

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
app.use("/crud", CRUD); // CRUD
app.use("/pagination", pagination); // pagination
app.use("/file_upload_download", file_upload_download); // File upload download
app.use("/search-items", search_items); // Search Items

app.listen(PORT, () => console.log("Server started at PORT no", PORT));
