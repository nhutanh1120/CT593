const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      require: [true, "Please enter your username!"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Please enter your password!"],
    },
    forename: {
      type: String,
    },
    surname: {
      type: String,
    },
    email: {
      type: String,
      require: [true, "Please enter your name!"],
      unique: true,
    },
    phone: { type: Number },
    address: {
      type: String,
    },
    description: {
      type: String,
    },
    avatar: {
      type: String,
    },
    role: {
      type: Number,
      default: 0, // 0 = customer, 1 = admin, 2 > user
    },
    access: {
      type: Boolean,
      default: true, // true allow access, false not allow access
    },
    check: {
      type: Boolean,
      default: false, // check update information
    },
    message: [
      {
        title: { type: String, default: "create_account" },
        time: { type: Date, default: Date.now() },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", UserSchema);
