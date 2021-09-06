const express = require("express");
const router = express.Router();

const agriculturalControllers = require("./../controllers/agriculturalController");

// localhost/api/agricultural/create
router.get("/read", agriculturalControllers.read);

// localhost/api/agricultural/create
router.post("/create", agriculturalControllers.create);

// localhost/api/agricultural/update/:id
router.patch("/update/:id", agriculturalControllers.update);

// localhost/api/agricultural/delete/:id
router.delete("/delete/:id", agriculturalControllers.delete);

module.exports = router;
