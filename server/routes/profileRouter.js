const express = require("express");
const router = express.Router();
const userProfileController = require("./../controllers/userProfileController");
const verifyToken = require("./../middleware/auth");
const authAdmin = require("./../middleware/authAdmin");

// @Router get /api/profile/info
router.get("/info", verifyToken, userProfileController.getUserInfo);

// @Router get /api/profile/all/info
router.get(
  "/all/info",
  verifyToken,
  authAdmin,
  userProfileController.getUsersAllInfo
);

// @Router patch /api/profile/update
router.patch("/update", verifyToken, userProfileController.updateUser);

// @Router patch /api/profile/role/update/:id
router.patch(
  "/role/update/:id",
  verifyToken,
  authAdmin,
  userProfileController.updateUsersRole
);

// @Router patch /api/profile/access/update/:id
router.patch(
  "/access/update/:id",
  verifyToken,
  authAdmin,
  userProfileController.updateUsersAccess
);

// @Router delete /api/profile/delete
router.delete("/delete/:id", verifyToken, userProfileController.deleteUser);

module.exports = router;
