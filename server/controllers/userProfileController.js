const Users = require("./../models/Users");

const userProfileControllers = {
  // @Router post /api/profile/info
  // @access private
  getUserInfo: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select("-password");

      res.json({ success: true, user });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  // @Router post /api/profile/all/info
  // @access private
  getUsersAllInfo: async (req, res) => {
    try {
      const users = await Users.find().select("-password");

      res.json({ success: true, users });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  // @Router post /api/profile/update
  // @access private
  updateUser: async (req, res) => {
    try {
      const { username, avatar } = req.body;
      await Users.findOneAndUpdate(
        { _id: req.user.id },
        {
          username,
          avatar,
        }
      );

      res.json({ success: true, message: "Update Success!" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },

  // @Router post /api/profile/update_role/:id
  // @access private
  updateUsersRole: async (req, res) => {
    try {
      const { role } = req.body;

      await Users.findOneAndUpdate(
        { _id: req.params.id },
        {
          role,
        }
      );

      res.json({ success: true, message: "Update Success!" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },

  deleteUser: async (req, res) => {
    try {
      await Users.findByIdAndDelete(req.params.id);

      res.json({ success: true, message: "Deleted Success!" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
};

module.exports = userProfileControllers;
