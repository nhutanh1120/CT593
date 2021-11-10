const AgriculturalModel = require("./../../models/Agricultural");

const retailerControllers = {
  // @Router post /api/agricultural/retailer/create
  // @access private
  create: async (req, res) => {
    try {
      console.log("create retailer agricultural request");

      if (req.role !== 5)
        return res.status(400).json({
          success: false,
          message: "User resources access denied.",
        });

      const { store, address, price, id } = req.body;

      if (address.length < 15 || store.length < 5) {
        return res.status(400).json({
          success: false,
          message: "Address must be 5 characters.",
        });
      }
      const agriculturalOld = await AgriculturalModel.findOne({
        _id: id,
      });
      const { producer, breed, actions, harvest, ...rest } = agriculturalOld;

      const newAgricultural = {
        producer,
        breed,
        actions,
        harvest,
        retailer: {
          profile: {
            user: req.user.id,
            ...req.information,
          },
          nameStore: store,
          addressRetail: address,
          price,
        },
        ...rest,
      };

      const agricultural = new AgriculturalModel(newAgricultural);
      await agricultural.save();

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

module.exports = retailerControllers;
