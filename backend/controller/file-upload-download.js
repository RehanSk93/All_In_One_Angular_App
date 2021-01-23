const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  if (req.files) {
    var file = req.files.file; // file is (name = "file") in  frontend.
    var fileName = file.name;

    // "uploads" is a folder you need to create in root directory
    file.mv("./uploads/" + fileName, (err) => {
      if (err) {
        res.send("Error - ", err);
      } else {
        res.status(200).json({
          message: "File uploaded successful",
        });
      }
    });
  }
});

// We have to export it must***
module.exports = router;
