const AgriculturalModel = require("./../../models/Agricultural");

const distributorControllers = {
  // @Router post /api/agricultural/distributor/create
  // @access private
  create: async (req, res) => {
    try {
      console.log("create distributor agricultural request");

      if (req.role !== 3)
        return res.status(400).json({
          success: false,
          message: "User resources access denied.",
        });

      const { start, end, id } = req.body;

      if (start.length < 15 || end.length < 15) {
        return res.status(400).json({
          success: false,
          message: "Address must be 15 characters.",
        });
      }
      const agriculturalOld = await AgriculturalModel.findOne({
        _id: id,
      });
      const { producer, breed, actions, harvest, distributor, processing } =
        agriculturalOld;

      const data = {
        profile: {
          user: req.user.id,
          ...req.information,
        },
        start: start,
        end: end,
      };
      distributor.push(data);

      const newAgricultural = {
        producer,
        breed,
        actions,
        harvest,
        distributor: distributor,
        processing,
        administrator: req.user.id,
        status: 1,
      };

      const agricultural = new AgriculturalModel(newAgricultural);
      await agricultural.save();

      res.json({
        success: true,
        message: "create distributor agricultural success",
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

module.exports = distributorControllers;
