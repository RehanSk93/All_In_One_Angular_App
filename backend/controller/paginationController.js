const express = require("express");
const router = express.Router();

const paginate = require("jw-paginate");

router.get("/", (req, res) => {
  // example array of 150 items to be paged
  const items = [...Array(750).keys()].map((i) => ({
    id: i + 1,
    name: "Item " + (i + 1),
  }));

  // get page from query params or default to first page
  const page = parseInt(req.query.page) || 1;

  // get pager object for specified page
  const pageSize = parseInt(req.query.pageSize) || 5;

  // mention max page size
  const maxPages = parseInt(req.query.pageSize) || 5;

  const pager = paginate(items.length, page, pageSize, maxPages);

  // get page of items from items array
  const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

  // return pager object and current page of items
  return res.json({ pager, pageOfItems });
});

// We have to export it must***
module.exports = router;
