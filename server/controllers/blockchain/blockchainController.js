const AgriculturalModel = require("./../../models/Agricultural");
const Hash = require("ipfs-only-hash");

const blockchainControllers = {
  // @Router post /api/agricultural/read/:id
  // @access private
  read: async (req, res) => {
    try {
      console.log("read blockchain agricultural request");
      const agricultural = await AgriculturalModel.findOne({
        _id: req.params.id,
      });

      // const data = "Hello word!";
      const hash = await Hash.of(agricultural);
      console.log(hash);

      res.json({
        success: true,
        message: "read agricultural success",
        hash,
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
  restore: async (req, res) => {
    try {
      console.log("read agricultural request");
      const updateAgricultural = req.body;
      const agricultural = await AgriculturalModel.findByIdAndUpdate(
        req.params.id,
        updateAgricultural,
        { new: true }
      );

      res.json({
        success: true,
        message: "restore agricultural success",
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

module.exports = blockchainControllers;
