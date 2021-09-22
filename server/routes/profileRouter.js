const express = require("express");
const router = express.Router();
const userProfileController = require("./../controllers/userProfileController");
const verifyToken = require("./../middleware/auth");
const authAdmin = require("./../middleware/authAdmin");

// @Router get /api/profile/info
router.get("/info", verifyToken, userProfileController.getUserInfo);

// @Router get /api/profile/all/info
router.get(
  "/all_info",
  verifyToken,
  authAdmin,
  userProfileController.getUsersAllInfo
);

// @Router patch /api/auth/update
router.patch("/update", verifyToken, userProfileController.updateUser);

// @Router patch /api/auth/update
router.patch(
  "/update_role/:id",
  verifyToken,
  userProfileController.updateUsersRole
);

// @Router delete /api/auth/delete
router.patch("/delete/:id", verifyToken, userProfileController.deleteUser);

module.exports = router;
