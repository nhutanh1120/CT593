const AgriculturalModel = require("./../../models/Agricultural");
const axios = require("axios");
const Hash = require("ipfs-only-hash");
const ipfs = process.env.IPFS || "https://ipfs.infura.io:5001/api/v0/cat?arg=";

const blockchainControllers = {
  // @Router post /api/blockchain/read/:id
  // @access private
  read: async (req, res) => {
    try {
      console.log("read blockchain agricultural request");
      const agricultural = await AgriculturalModel.findOne({
        _id: req.params.id,
      });
      const dataSave = {
        _id: agricultural._id,
        producer: agricultural.producer,
        breed: agricultural.breed,
        actions: agricultural.actions,
        harvest: agricultural.harvest,
        distributor: agricultural.distributor,
        processing: agricultural.processing,
        retailer: agricultural?.retailer?.profile?.user
          ? agricultural?.retailer
          : null,
        administrator: agricultural.administrator,
        status: agricultural.status,
      };

      console.log(JSON.stringify(dataSave));

      const hash = await Hash.of(JSON.stringify(dataSave));
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
  // @Router post /api/blockchain/restore/:id
  // @access private
  restore: async (req, res) => {
    try {
      console.log("read agricultural request");
      const hash = req.body;

      if (hash === "") {
        return res.status(400).json({
          success: false,
          message: "Hash string cannot be empty.",
        });
      }

      const response = await axios.get(ipfs + hash);

      const agricultural = await AgriculturalModel.findByIdAndUpdate(
        req.params.id,
        response.data,
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
