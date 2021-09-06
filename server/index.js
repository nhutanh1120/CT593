require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/authRouter");
const postRouter = require("./routes/postRouter");
const uploadRouter = require("./routes/uploadRouter");
const agriculturalRouter = require("./routes/agriculturalRouter");
const profileRouter = require("./routes/profileRouter");

const conn = require("./config/db");
const fileUpload = require("express-fileupload");
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.get("/", (req, res) => res.send("Hello worlds"));
app.use("/api/auth", authRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/post", postRouter);
app.use("/api/agricultural", agriculturalRouter);
app.use("/api/profile", profileRouter);

conn.connect();
app.listen(port, () => console.log("Server running on port " + port));
