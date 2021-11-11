const AgriculturalModel = require("./../../models/Agricultural");

const processingControllers = {
  // @Router post /api/agricultural/distributor/create
  // @access private
  create: async (req, res) => {
    try {
      console.log("create processing agricultural request");

      if (req.role !== 4)
        return res.status(400).json({
          success: false,
          message: "User resources access denied.",
        });

      const { nameProduct, images, dateManufacture, expiry, ingredients, id } =
        req.body;

      if (nameProduct === "" || expiry === "") {
        return res.status(400).json({
          success: false,
          message: "Please enter the information.",
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
        nameProduct,
        images,
        dateManufacture,
        expiry,
        ingredients,
      };
      processing.push(data);

      const newAgricultural = {
        producer,
        breed,
        actions,
        harvest,
        distributor,
        processing: processing,
        administrator: req.user.id,
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

module.exports = processingControllers;
