const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AgriculturalSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    typeAgricultural: {
      // Loại nông sản -> Cây trồng (0) hoặc vật nuôi (1)
      type: Number,
      required: true,
    },
    address: { type: String, required: true },
    breed: {
      // Quản lý giống
      nameBreed: String, // Tên giống
      supplierBreed: String, // Nhà cung cấp
      timeBreed: Date, // Thời gian xuống giống
    },
    actions: [
      // Quản lý các hoạt động
      {
        typeAction: Number, // Loại hoạt động -> Phun thuốc (0), rải phân (1), thức ăn (2)
        listAction: [
          {
            nameAction: String, // Tên
            supplierAction: String, // Nhà cung cấp
          },
        ],
        timeAction: Date, // Thời gian
      },
    ],
    harvest: {
      timeAgricultural: Date, // Thời gian thu hoạch
      imgUrl: String, // Ảnh sản phẩm
    },
    isSuccess: {
      // 0-> create, 1-> info, 2-> success
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("agricultural", AgriculturalSchema);
