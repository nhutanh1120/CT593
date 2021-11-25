const Users = require("./../models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const mobileControllers = {
  // @Router post /api/auth/mobile/login
  // @access public
  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await Users.findOne({ username });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "This username does not exist!",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Password is incorrect.",
        });
      }

      const refresh_token = createRefreshToken({ id: user._id });
      res.status(202).cookie("refresh", refresh_token, {
        httpOnly: true,
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        sameSite: "strict",
      });

      res.json({
        success: true,
        message: "Login success!",
        refresh_token,
        user,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  // @Router post /api/auth/mobile/logout
  // @access private
  logout: async (req, res) => {
    try {
      res.clearCookie("refresh");
      return res.json({ success: true, message: "Logged out." });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = mobileControllers;
