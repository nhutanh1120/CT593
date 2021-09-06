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
    email: {
      type: String,
      require: [true, "Please enter your name!"],
      unique: true,
    },
    role: {
      type: Number,
      default: 0, // 0 = user, 1 = admin
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", UserSchema);
