const AgriculturalModel = require("./../../models/Agricultural");
const Users = require("./../../models/Users");

const producerControllers = {
  // @Router post /api/agricultural/producer/update/:id
  // @access private
  update: async (req, res) => {
    try {
      console.log("update producer agricultural request");

      if (req.role !== 2)
        return res.status(400).json({
          success: false,
          message: "User resources access denied.",
        });

      const { typeAction, timeAction, listAction } = req.body;

      if (typeAction === "" || timeAction === "" || listAction.length < 1) {
        return res.status(400).json({
          success: false,
          message: "Please fill out the form.",
        });
      }

      const agriculturalUpdate = await AgriculturalModel.findOneAndUpdate(
        {
          _id: req.params.id,
          administrator: req.user.id,
        },
        {
          $push: {
            actions: {
              typeAction: typeAction,
              listAction: listAction,
              timeAction: timeAction,
            },
          },
        },
        { new: true }
      );

      res.json({
        success: true,
        message: "update producer agricultural success",
        agricultural: agriculturalUpdate,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  // @Router post /api/agricultural/producer/finish/:id
  // @access private
  finish: async (req, res) => {
    try {
      console.log("finish producer agricultural request");

      if (req.role !== 2)
        return res.status(400).json({
          success: false,
          message: "User resources access denied.",
        });

      const { times, images, expiry, description } = req.body;

      if (times === "" || images === "" || expiry < 1) {
        return res.status(400).json({
          success: false,
          message: "Please fill out the form.",
        });
      }

      const agriculturalUpdate = await AgriculturalModel.findOneAndUpdate(
        {
          _id: req.params.id,
          administrator: req.user.id,
        },
        {
          harvest: {
            times: times,
            images: images,
            expiry: expiry,
            description: description,
          },
          status: 1,
        },
        { new: true }
      );

      await Users.updateMany(
        { role: 1 },
        {
          $push: {
            message: {
              title: agriculturalUpdate.producer.name,
              status: "check_agricultural",
            },
          },
        }
      );

      const userNotification = await Users.findByIdAndUpdate(
        req.user.id,
        {
          $push: {
            message: {
              title: agriculturalUpdate.breed.nameBreed,
              status: "finish_agricultural",
            },
          },
        },
        { new: true }
      );

      res.json({
        success: true,
        message: "update producer agricultural success",
        agricultural: agriculturalUpdate,
        notification: userNotification.message,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
};

module.exports = producerControllers;
