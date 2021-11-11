const Users = require("./../models/Users");

const userAccess = async (req, res, next) => {
  try {
    const user = await Users.findOne({ _id: req.user.id });

    if (user.role <= 1) {
      return res
        .status(500)
        .json({ success: false, message: "User resources access denied." });
    }
    req.information = {
      name: user.surname + " " + user.forename,
      phone: user.phone,
      email: user.email,
      address: user.address,
    };
    req.role = user.role;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

module.exports = userAccess;
