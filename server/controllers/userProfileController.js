const Users = require("./../models/Users");

const userProfileControllers = {
  // @Router post /api/profile/info
  // @access private
  getUserInfo: async (req, res) => {
    try {
      console.log("get user request");
      const user = await Users.findById(req.user.id).select("-password");

      res.json({ success: true, message: "Get information success.", user });
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
      console.log("get all user request");

      res.json({ success: true, message: "Get information success.", users });
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
      console.log("update user request");
      const { forename, surname, phone, address, birthday, avatar, ...rest } =
        req.body;
      if (!forename || !surname || !phone || !address || !birthday || !avatar) {
        console.log("A");
        return res.status(400).json({
          success: false,
          message: "Please fill all fields.",
        });
      }
      const userUpdate = await Users.findOneAndUpdate(
        { _id: req.user.id },
        {
          forename,
          surname,
          phone,
          address,
          birthday,
          avatar,
          check: true,
          ...rest,
        },
        { new: true }
      );

      res.json({ success: true, message: "Update Success!", user: userUpdate });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },

  // @Router post /api/profile/role/update/:id
  // @access private
  updateUsersRole: async (req, res) => {
    try {
      const { role } = req.body;
      console.log("update role user request");
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
  // @Router post /api/profile/access/update/:id
  // @access private
  updateUsersAccess: async (req, res) => {
    try {
      const { access } = req.body;
      console.log("update access user request");
      await Users.findOneAndUpdate(
        { _id: req.params.id },
        {
          access,
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
  // @Router post /api/profile/delete/:id
  // @access private
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
