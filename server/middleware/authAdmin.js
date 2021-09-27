const Users = require("./../models/Users");

const authAdmin = async (req, res, next) => {
  try {
    const user = await Users.findOne({ _id: req.user.id });

    // console.log(user.id);

    if (user.role !== 1) {
      return res
        .status(500)
        .json({ success: false, message: "Admin resources access denied." });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

module.exports = authAdmin;
