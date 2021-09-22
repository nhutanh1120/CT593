const express = require("express");
const router = express.Router();
const verifyToken = require("./../middleware/auth");
const userControllers = require("./../controllers/userController");

//localhost/api/auth/register
router.post("/register", userControllers.register);

//localhost/api/auth/activation
router.post("/activation", userControllers.activateEmail);

// @Router post /api/auth/login
router.post("/login", userControllers.login);

// @Router post /api/auth/refresh
router.post("/refresh", userControllers.getAccessToken);

// @Router post /api/auth/forgot
router.post("/forgot", userControllers.forgotPassword);

// @Router post /api/auth/reset
router.post("/reset", verifyToken, userControllers.resetPassword);

// @Router get /api/auth/logout
router.get("/logout", userControllers.logout);

// @social Login
// @http://localhost:4000/api/auth/google_login
router.post("/google_login", userControllers.googleLogin);

// @social Login
// @http://localhost:4000/api/auth/facebook_login
router.post("/facebook_login", userControllers.facebookLogin);

module.exports = router;
