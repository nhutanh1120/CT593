const express = require("express");
const router = express.Router();

const verifyToken = require("./../middleware/auth");
const Post = require("./../models/Post");
const postController = require("./../controllers/postController");

// @router GET /api/post/read
// @desc read
// @access private
router.get("/all", postController.getAllPosts);

// @router GET /api/post/read
// @desc read
// @access private
router.get("/", verifyToken, postController.getPosts);

// @router POST /api/post/create
// @desc create
// @access private
router.post("/", verifyToken, postController.createPost);

// @route PUT api/posts
// @desc Update post
// @access Private
router.put("/:id", verifyToken, postController.updatePost);

// @route DELETE api/posts
// @desc Delete post
// @access Private
router.delete("/:id", verifyToken, postController.deletePost);

// @route PATCH api/posts/:id/like
// @desc Patch post
// @access Private
router.patch("/:id/like", verifyToken, postController.likePost);

// @route PATCH api/posts/:id/unlike
// @desc Patch post
// @access Private
router.patch("/:id/unlike", verifyToken, postController.unLikePost);

module.exports = router;
