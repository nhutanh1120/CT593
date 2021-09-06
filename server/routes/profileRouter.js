const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
  res.send("hello");
});

module.exports = router;
