const express = require("express");
const router = express.Router();
const emailControllers = require("./../controllers/email/emailController");
const verifyToken = require("./../middleware/auth");
const authAdmin = require("./../middleware/authAdmin");

// @Router post /api/email/create
router.post("/send", verifyToken, authAdmin, emailControllers.send);

module.exports = router;
