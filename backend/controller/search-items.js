const express = require("express");
const router = express.Router();

// We need to import models Schema
const _users = require("../models/users");

router.get("/", (req, res) => {
  const searchField = req.query.name; // 'we can search by name here'
  _users.find(
    { name: { $regex: searchField, $options: "$i" } },
    (err, docs) => {
      if (!err) {
        res.status(200).json({
          data: docs,
        });
      } else {
        console.log(
          "Error in search users :" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

// We have to export it must***
module.exports = router;
