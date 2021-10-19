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
      address: { type: String, required: true }, // Địa chỉ sản xuất
    },
    breed: {
      // Quản lý giống
      typeAgricultural: {
        // Loại nông sản -> Cây trồng (0) hoặc vật nuôi (1)
        type: Number,
        required: true,
      },
      nameBreed: String, // Tên giống
      supplierBreed: String, // Nhà cung cấp
      timeBreed: { type: Date, default: Date.now() }, // Thời gian xuống giống
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
        timeAction: { type: Date, default: Date.now() }, // Thời gian
      },
    ],
    harvest: {
      timeAgricultural: { type: Date, default: Date.now() }, // Thời gian thu hoạch
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
