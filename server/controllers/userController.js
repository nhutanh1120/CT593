const Users = require("./../models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const sendMail = require("./sendMail");

const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const fetch = require("node-fetch");

const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID);

const { CLIENT_URL } = process.env;

const userControllers = {
  // @Router post /api/auth/register
  // @access public
  register: async (req, res) => {
    try {
      const { username, password, email } = req.body;

      if (!username || !password || !email) {
        return res.status(400).json({
          success: false,
          message: "Please fill in all fields.",
        });
      }

      if (!validateEmail(email)) {
        return res.status(400).json({
          success: false,
          message: "Invalid emails.",
        });
      }

      const user = await Users.findOne({ username });
      // check for existing user
      if (user) {
        return res.status(400).json({
          success: false,
          message: "Username already taken.",
        });
      }
      const emails = await Users.findOne({ email });
      // check for existing email
      if (emails) {
        return res.status(400).json({
          success: false,
          message: "This email already exists.",
        });
      }
      if (password.length < 6) {
        return res.status(400).json({
          success: false,
          message: "Password must be at least 6 characters.",
        });
      }

      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = {
        username,
        password: passwordHash,
        email,
      };

      const activation_token = createActivationToken(newUser);

      const url = CLIENT_URL + "/api/auth/activation/" + activation_token;
      sendMail(email, url, "Verify your email address");

      return res.json({
        success: true,
        message: "Username create successfully.",
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  // @Router post /api/auth/activate
  // @access private
  activateEmail: async (req, res) => {
    try {
      const { activation_token } = req.body;
      const user = jwt.verify(
        activation_token,
        process.env.ACTIVATION_TOKEN_SECRET
      );

      const { username, password, email } = user;

      const CheckUser = await Users.findOne({ username });
      if (CheckUser) {
        return res.status(400).json({
          success: false,
          message: "Username already taken.",
        });
      }
      const check = await Users.findOne({ email });
      if (check) {
        return res.status(400).json({
          success: false,
          message: "This email already exists.",
        });
      }

      const newUser = new Users({
        username,
        password,
        email,
      });

      await newUser.save();

      return res.json({
        success: true,
        message: "Account has been activated!",
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  // @Router post /api/auth/login
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
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  // @Router post /api/auth/refresh
  // @access private
  getAccessToken: (req, res) => {
    try {
      const rf_token = req.cookies.refresh;
      if (!rf_token) {
        return res.status(400).json({
          success: false,
          message: "Please login now!!",
        });
      }

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Please login now!!",
          });
        }

        const access_token = createAccessToken({ id: user.id });
        return res.json({
          success: true,
          access_token,
        });
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  // @Router post /api/auth/forgotPassword
  // @access public
  forgotPassword: async (req, res) => {
    try {
      const { email } = req.body;
      const user = await Users.findOne({ email });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "This email does not exist.",
        });
      }

      const access_token = createAccessToken({ id: user._id });
      const url = CLIENT_URL + "/api/auth/reset/" + access_token;

      sendMail(email, url, "Reset your password");
      console.log(url);

      return res.json({
        success: true,
        message: "Re-send the password, please check your email.",
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  // @Router post /api/auth/resetPassword
  // @access public
  resetPassword: async (req, res) => {
    try {
      const { password } = req.body;
      const passwordHash = await bcrypt.hash(password, 12);

      await Users.findOneAndUpdate(
        { _id: req.user.id },
        {
          password: passwordHash,
        }
      );

      res.json({ success: true, message: "Password successfully changed!" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  // @Router post /api/auth/logout
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
  // @Router post /api/auth/google/login
  // @access public
  googleLogin: async (req, res) => {
    try {
      const { tokenId } = req.body;

      const verify = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.MAILING_SERVICE_CLIENT_ID,
      });

      const { email_verified, email, name, picture } = verify.payload;

      const password = email + process.env.GOOGLE_SECRET;

      const passwordHash = await bcrypt.hash(password, 12);

      if (!email_verified) {
        return res
          .status(400)
          .json({ success: true, message: "Email verification failed." });
      }

      const user = await Users.findOne({ email });

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res
            .status(400)
            .json({ success: true, message: "Password is incorrect." });
        }

        const refresh_token = createRefreshToken({ id: user._id });
        res.cookie("refresh", refresh_token, {
          httpOnly: true,
          path: "/",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
          sameSite: "strict",
        });

        res.json({ success: true, message: "Login success!" });
      } else {
        const newUser = new Users({
          fullname: name,
          username: email,
          password: passwordHash,
          email,
          avatar: picture,
        });

        await newUser.save();

        const refresh_token = createRefreshToken({ id: newUser._id });
        res.cookie("refresh", refresh_token, {
          httpOnly: true,
          path: "/",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
          sameSite: "strict",
        });

        res.json({ success: true, message: "Login success!" });
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  facebookLogin: async (req, res) => {
    try {
      const { accessToken, userID } = req.body;

      const URL =
        "https://graph.facebook.com/v2.9/" +
        userID +
        "/?fields=id,name,email,picture&access_token=" +
        accessToken;

      const data = await fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          return res;
        });

      const { email, name, picture } = data;

      const password = email + process.env.FACEBOOK_SECRET;

      const passwordHash = await bcrypt.hash(password, 12);

      const user = await Users.findOne({ email });

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res
            .status(400)
            .json({ success: true, message: "Password is incorrect." });
        }

        const refresh_token = createRefreshToken({ id: user._id });
        res.cookie("refresh", refresh_token, {
          httpOnly: true,
          path: "/",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
          sameSite: "strict",
        });

        res.json({ success: true, message: "Login success!" });
      } else {
        const newUser = new Users({
          name,
          email,
          password: passwordHash,
          avatar: picture.data.url,
        });

        await newUser.save();

        const refresh_token = createRefreshToken({ id: newUser._id });
        res.cookie("refresh", refresh_token, {
          httpOnly: true,
          path: "/",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
          sameSite: "strict",
        });

        res.json({ success: true, message: "Login success!" });
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
};

//regular expression
function validateEmail(email) {
  const res =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(email);
}

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "5m",
  });
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = userControllers;
