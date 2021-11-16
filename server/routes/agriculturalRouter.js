const express = require("express");
const router = express.Router();
const verifyToken = require("./../middleware/auth");
const authAdmin = require("./../middleware/authAdmin");
const userAccess = require("./../middleware/userAccess");
const agriculturalControllers = require("./../controllers/agricultural/agriculturalController");
const distributorControllers = require("./../controllers/agricultural/distributorController");
const processingControllers = require("./../controllers/agricultural/processingController");
const retailerControllers = require("./../controllers/agricultural/retailerController");

// localhost/api/agricultural/all/read
router.get("/all/read", agriculturalControllers.readAll);

// localhost/api/agricultural/read/:id
router.get("/read/:id", agriculturalControllers.read);

// localhost/api/agricultural/user/read
router.get(
  "/user/read",
  verifyToken,
  userAccess,
  agriculturalControllers.readGroup
);

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

/**
 * Distributor Router
 * localhost/api/agricultural/distributor/create
 */
router.post(
  "/distributor/create",
  verifyToken,
  userAccess,
  distributorControllers.create
);

/**
 * Processing Router
 * localhost/api/agricultural/reatailer/create
 */
router.post(
  "/processing/create",
  verifyToken,
  userAccess,
  processingControllers.create
);

/**
 * Retailer Router
 * localhost/api/agricultural/reatailer/create
 */
router.post(
  "/retailer/create",
  verifyToken,
  userAccess,
  retailerControllers.create
);

module.exports = router;
