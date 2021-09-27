const express = require("express");
const router = express.Router();
const contactControllers = require("./../controllers/contactController");

// @Router post /api/contact/create
router.post("/read", contactControllers.read);

// @Router post /api/contact/create
router.post("/create", contactControllers.create);

module.exports = router;
