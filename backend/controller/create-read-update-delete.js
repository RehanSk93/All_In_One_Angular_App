const express = require("express");
const router = express.Router();

// We need to import models Schema
const _users = require("../models/users");

// Create API
router.post("/create", (req, res) => {
  // Sort syntax
  // let userData = req.body;
  // let user = new _users(userData);

  // Create a variable and coming request details
  let userDetails = new _users({
    name: req.body.name,
    position: req.body.position,
    company: req.body.company,
    location: req.body.location,
  });

  console.log(userDetails);

  // After storing data, We need to save data into database
  userDetails.save((err, docs) => {
    if (!err) {
      res.status(200).json({
        message: "User inserted successfully",
        data: docs,
      });
    } else {
      console.log("Error occurs : " + JSON.stringify(err, undefined, 2));
    }
  });
});

router.get("/read", (req, res) => {
  _users.find((err, docs) => {
    if (!err) {
      res.status(200).json({
        message: "Data fetched from server",
        data: docs,
      });
    } else {
      console.log("Error occurs : " + JSON.stringify(err, undefined, 2));
    }
  });
});

// We have to export it must***
module.exports = router;
