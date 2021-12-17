const express = require("express");
const router = express.Router();
const verifyToken = require("./../middleware/auth");
const authAdmin = require("./../middleware/authAdmin");
const blockchainControllers = require("./../controllers/blockchain/blockchainController");
const administratorControllers = require("./../controllers/agricultural/administratorController");

// localhost/api/blockchain/read/:id
router.get("/read/:id", blockchainControllers.read);

// localhost/api/blockchain/mobile/read/:id
router.get("/mobile/read/:id", blockchainControllers.readMobile);

// localhost/api/blockchain/restore/:id
router.put(
  "/restore/:id",
  // verifyToken,
  // authAdmin,
  blockchainControllers.restore
);

// localhost/api/blockchain/admin/:id
router.patch(
  "/admin/:id",
  verifyToken,
  authAdmin,
  administratorControllers.check
);

module.exports = router;
