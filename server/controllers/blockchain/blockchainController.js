const AgriculturalModel = require("./../../models/Agricultural");
const axios = require("axios");
const Hash = require("ipfs-only-hash");
const Web3 = require("web3");
const ipfs = process.env.IPFS || "https://ipfs.infura.io:5001/api/v0/cat?arg=";

const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_walletAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_id",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_censor",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_hashString",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_createTime",
        type: "uint256",
      },
    ],
    name: "sendStatus",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
      {
        internalType: "string",
        name: "_censor",
        type: "string",
      },
      {
        internalType: "string",
        name: "_hashString",
        type: "string",
      },
    ],
    name: "addAgricultural",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "arrayAgricultural",
    outputs: [
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "string",
        name: "censor",
        type: "string",
      },
      {
        internalType: "string",
        name: "hashString",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "createTime",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
    ],
    name: "getAgricultural",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "id",
            type: "string",
          },
          {
            internalType: "string",
            name: "censor",
            type: "string",
          },
          {
            internalType: "string",
            name: "hashString",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "createTime",
            type: "uint256",
          },
        ],
        internalType: "struct SupplyChainManagement.Agricultural",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllAgricultural",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "id",
            type: "string",
          },
          {
            internalType: "string",
            name: "censor",
            type: "string",
          },
          {
            internalType: "string",
            name: "hashString",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "createTime",
            type: "uint256",
          },
        ],
        internalType: "struct SupplyChainManagement.Agricultural[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

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
  // @Router post /api/blockchain/mobile/read/:id
  // @access private
  readMobile: async (req, res) => {
    try {
      console.log("read blockchain agricultural request");

      let infura =
        process.env.INFURA ||
        "wss://rinkeby.infura.io/ws/v3/ae82f11804ff4cd58a7ef8bb0ebe4f42";

      const address = process.env.ADDRESS_SMART_CONTRACT;

      const web3 = new Web3(infura);
      const contract = new web3.eth.Contract(abi, address);

      const agricultural = await AgriculturalModel.findOne({
        _id: req.params.id,
      });

      if (!agricultural)
        return res.status(400).json({
          success: false,
          message: "Data agricultural cannot be empty.",
        });

      const dataHash = await contract.methods
        .getAgricultural(req.params.id)
        .call();

      if (!dataHash)
        return res.status(400).json({
          success: false,
          message: "Hash string cannot be empty.",
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
      const hash = await Hash.of(JSON.stringify(dataSave));

      if (hash === dataHash.hashString) {
        res.json({
          success: true,
          message: "read agricultural success",
          agricultural,
        });
      } else {
        res.json({
          success: false,
          message: "read agricultural failed",
        });
      }
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
      console.log("restore agricultural request");
      const { hash } = req.body;

      if (hash === "") {
        return res.status(400).json({
          success: false,
          message: "Hash string cannot be empty.",
        });
      }

      const response = await axios.get(
        ipfs + "QmVsCFihiWZ8NpH7Dv5Gu84r9KniAV6GMTB6cjM3S6M4Ad"
      );

      const find = await AgriculturalModel.findById(req.params.id);

      let agricultural;
      if (find) {
        agricultural = await AgriculturalModel.findByIdAndUpdate(
          req.params.id,
          { status: 2 },
          { new: true }
        );
      }
      console.log(agricultural);

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
