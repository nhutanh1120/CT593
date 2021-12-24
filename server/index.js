require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/authRouter");
const postRouter = require("./routes/postRouter");
const uploadRouter = require("./routes/uploadRouter");
const agriculturalRouter = require("./routes/agriculturalRouter");
const profileRouter = require("./routes/profileRouter");
const contactRouter = require("./routes/contactRouter");
const blockchainRouter = require("./routes/blockchainRouter");
const emailRouter = require("./routes/emailRouter");

const conn = require("./config/db");
const fileUpload = require("express-fileupload");
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json({ limit: "50mb" }));

app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => callback(null, true), //accept all
  })
);

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
app.use("/api/contact", contactRouter);
app.use("/api/blockchain", blockchainRouter);
app.use("/api/email", emailRouter);

conn.connect();
app.listen(port, () => console.log("Server running on port " + port));
