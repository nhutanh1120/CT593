const express = require("express");
const router = express.Router();
const verifyToken = require("./../middleware/auth");
const authAdmin = require("./../middleware/authAdmin");
const userAccess = require("./../middleware/userAccess");
const agriculturalControllers = require("./../controllers/agriculturalController");

// localhost/api/agricultural/all/read
router.get("/all/read", verifyToken, agriculturalControllers.readAll);

// localhost/api/agricultural/read/:id
router.get("/read/:id", agriculturalControllers.read);

// localhost/api/agricultural/user/read
router.get("/user/read", verifyToken, agriculturalControllers.readGroup);

// localhost/api/agricultural/create
router.post("/create", verifyToken, userAccess, agriculturalControllers.create);

// localhost/api/agricultural/update/:id
router.patch(
  "/update/:id",
  verifyToken,
  userAccess,
  agriculturalControllers.update
);

// localhost/api/agricultural/delete/:id
router.delete(
  "/delete/:id",
  verifyToken,
  userAccess,
  agriculturalControllers.delete
);

module.exports = router;
