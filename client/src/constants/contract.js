export const ACCOUNT = "0x1d242c75435A671eD0DE84f07eF23E4040458bC0";
export const ADDRESS_SMART_CONTRACT =
  "0x80818679a47c44c1ee8ec62546e9fca19408b910";
export const ABI = [
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
