const AgriculturalModel = require("./../../models/Agricultural");
const Users = require("./../../models/Users");

const administratorControllers = {
  // @Router post /api/agricultural/admin/:id
  // @access private
  check: async (req, res) => {
    try {
      console.log("check admin agricultural request");

      const agricultural = await AgriculturalModel.findByIdAndUpdate(
        req.params.id,
        {
          status: 2,
        },
        { new: true }
      );

      await Users.findByIdAndUpdate(
        agricultural.administrator,
        {
          $push: {
            message: {
              title: "Quản trị viên",
              status: "status_success",
            },
          },
        },
        { new: true }
      );

      res.json({
        success: true,
        message: "create retailer agricultural success",
        agricultural,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
};

module.exports = administratorControllers;
