const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AgriculturalSchema = new Schema(
  {
    producer: {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      name: { type: String, required: true },
      phone: { type: Number, required: true },
      email: { type: String, required: true },
      address: { type: String, required: true }, // Dia chi lien he
    },
    breed: {
      typeAgricultural: {
        type: Number, // Cây trồng (0), vật nuôi (1)
        required: true,
      },
      nameBreed: { type: String },
      supplierBreed: { type: String },
      addressBreed: { type: String }, //Dia chi san xuat
      timeBreed: { type: Date, default: Date.now() },
    },
    actions: [
      {
        typeAction: Number, // thuoc (0), phan bon / thuc an (1)
        listAction: [
          {
            nameAction: String,
            supplierAction: String,
          },
        ],
        timeAction: { type: Date, default: Date.now() },
      },
    ],
    harvest: {
      times: { type: Date },
      images: { type: String },
      expiry: { type: Number }, //Day
    },
    distributor: {
      profile: {
        user: {
          type: Schema.Types.ObjectId,
          ref: "users",
        },
        name: { type: String },
        phone: { type: Number },
        email: { type: String },
        address: { type: String },
      },
      start: { type: String },
      end: { type: String },
    },
    processing: {
      profile: {
        user: {
          type: Schema.Types.ObjectId,
          ref: "users",
        },
        name: { type: String },
        phone: { type: Number },
        email: { type: String },
        address: { type: String },
      },
      nameProduct: {
        type: String,
      },
      images: { type: String },
      dateManufacture: { type: Date },
      expiry: { type: Number },
      ingredients: [
        {
          name: String,
          supplier: String,
        },
      ],
    },
    retailer: {
      profile: {
        user: {
          type: Schema.Types.ObjectId,
          ref: "users",
        },
        name: { type: String },
        phone: { type: Number },
        email: { type: String },
        address: { type: String },
      },
      addressRetail: { type: String },
      price: { type: Number },
    },
    isSuccess: {
      type: Number, // 0-> create, 1-> info, 2-> success
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("agricultural", AgriculturalSchema);
