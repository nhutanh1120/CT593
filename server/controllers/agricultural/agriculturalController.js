const AgriculturalModel = require("./../../models/Agricultural");

const agriculturalControllers = {
  // @Router post /api/agricultural/read/:id
  // @access private
  read: async (req, res) => {
    try {
      console.log("read agricultural request");
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
  // @Router post /api/agricultural/user/read/
  // @access private
  readGroup: async (req, res) => {
    try {
      console.log("read group agricultural request");
      let agricultural = {};
      switch (req.role) {
        case 2:
          agricultural = await AgriculturalModel.find({
            "producer.user": req.user.id,
          });
          break;
        case 3:
          agricultural = await AgriculturalModel.find({
            "distributor.profile.user": req.user.id,
          });
          break;
        case 4:
          agricultural = await AgriculturalModel.find({
            "processing.profile.user": req.user.id,
          });
          break;
        case 5:
          agricultural = await AgriculturalModel.find({
            "retailer.profile.user": req.user.id,
          });
          break;
        default:
          agricultural = await AgriculturalModel.find({
            "producer.user": req.user.id,
          });
          break;
      }

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
  // @Router post /api/agricultural/read/:id
  // @access private
  readAll: async (req, res) => {
    try {
      const agricultural = await AgriculturalModel.find();
      console.log("read all agricultural request");
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
      console.log("create agricultural request");

      if (req.role !== 2)
        return res.status(400).json({
          success: false,
          message: "User resources access denied.",
        });

      const { producer, breed, ...rest } = req.body;
      if (!producer?.name) {
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
      const newProducer = {
        user: req.user.id,
        name: producer.name,
        phone: req.information.phone,
        email: req.information.email,
        address: req.information.address,
      };

      const newAgricultural = {
        producer: newProducer,
        breed,
        ...rest,
      };

      const agricultural = new AgriculturalModel(newAgricultural);
      await agricultural.save();

      res.json({
        success: true,
        message: "create agricultural success",
        agricultural,
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
      console.log("update agricultural request");
      if (req.role !== 2)
        return res.status(400).json({
          success: false,
          message: "User resources access denied.",
        });
      const { producer, breed, ...rest } = req.body;

      if (!producer?.name) {
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
      const newProducer = {
        user: req.user.id,
        name: producer.name,
        phone: req.information.phone,
        email: req.information.email,
        address: req.information.address,
      };
      const updateAgricultural = {
        producer: newProducer,
        breed,
        ...rest,
      };

      const agriculturalUpdate = await AgriculturalModel.findOneAndUpdate(
        {
          _id: req.params.id,
          "producer.user": req.user.id,
        },
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
      console.log("delete agricultural request");
      let deletedAgricultural = {};
      switch (req.role) {
        case 2:
          deletedAgricultural = await AgriculturalModel.findOneAndDelete({
            _id: req.params.id,
            "producer.user": req.user.id,
          });
          break;
        case 3:
          deletedAgricultural = await AgriculturalModel.findOneAndDelete({
            "distributor.profile.user": req.user.id,
          });
          break;
        case 4:
          deletedAgricultural = await AgriculturalModel.findOneAndDelete({
            "processing.profile.user": req.user.id,
          });
          break;
        case 5:
          deletedAgricultural = await AgriculturalModel.findOneAndDelete({
            "retailer.profile.user": req.user.id,
          });
          break;
        default:
          deletedAgricultural = await AgriculturalModel.find({
            "producer.user": req.user.id,
          });
          break;
      }
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