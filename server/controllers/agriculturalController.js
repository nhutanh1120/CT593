const AgriculturalModel = require("./../models/Agricultural");

const agriculturalControllers = {
  // @Router post /api/agricultural/read/:id
  // @access private
  read: async (req, res) => {
    try {
      const agricultural = await AgriculturalModel.findOne({
        _id: req.params.id,
      });

      res.json({
        success: true,
        message: "read agricultural success",
        agricultural,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  readAll: async (req, res) => {
    try {
      const agricultural = await AgriculturalModel.find();

      res.json({
        success: true,
        message: "read agricultural success",
        agricultural,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  // @Router post /api/agricultural/create
  // @access private
  create: async (req, res) => {
    try {
      const { producer, breed, ...rest } = req.body;

      if (!producer?.name && !producer?.address) {
        return res.status(400).json({
          success: false,
          message: "Please fill in the producer.",
        });
      }
      if (
        !breed?.typeAgricultural &&
        !breed?.nameBreed &&
        !breed?.supplierBreed
      ) {
        return res.status(400).json({
          success: false,
          message: "Please fill in the breed.",
        });
      }
      const newAgricultural = {
        producer,
        breed,
        ...rest,
      };

      const agricultural = new AgriculturalModel(newAgricultural);
      await agricultural.save();

      res.json({
        success: true,
        message: "create agricultural success",
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  // @Router post /api/agricultural/update/:id
  // @access private
  update: async (req, res) => {
    try {
      const { producer, breed, ...rest } = req.body;

      if (!producer?.name && !producer?.address) {
        return res.status(400).json({
          success: false,
          message: "Please fill in the producer.",
        });
      }
      if (
        !breed?.typeAgricultural &&
        !breed?.nameBreed &&
        !breed?.supplierBreed
      ) {
        return res.status(400).json({
          success: false,
          message: "Please fill in the breed.",
        });
      }
      const updateAgricultural = {
        producer,
        breed,
        ...rest,
      };

      const agriculturalUpdate = await AgriculturalModel.findOneAndUpdate(
        { _id: req.params.id },
        updateAgricultural,
        { new: true }
      );
      await agriculturalUpdate.save();

      res.json({
        success: true,
        message: "update agricultural success",
        data: agriculturalUpdate,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  // @Router post /api/agricultural/delete/:id
  // @access private
  delete: async (req, res) => {
    try {
      const deletedAgricultural = await AgriculturalModel.findOneAndDelete({
        _id: req.params.id,
      });
      const deleteAll = await AgriculturalModel.deleteMany({});
      if (!deletedAgricultural)
        return res.status(401).json({
          success: false,
          message: "Agricultural not found or user not authorized",
        });

      res.json({
        success: true,
        message: "delete agricultural success",
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
};

module.exports = agriculturalControllers;
