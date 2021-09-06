const router = require("express").Router();
const uploadImage = require("./../middleware/uploadImage");
const uploadController = require("./../controllers/uploadController");
const verifyToken = require("./../middleware/auth");

router.post(
  "/upload_avatar",
  uploadImage,
  verifyToken,
  uploadController.uploadAvatar
);

module.exports = router;
