const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    fullname: {
      type: String,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: { type: Number },
    description: {
      type: String,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contact", ContactSchema);
