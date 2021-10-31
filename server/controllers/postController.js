const Post = require("./../models/Post");
const postController = {
  getPosts: async (req, res) => {
    try {
      const posts = await Post.find({ author: req.user.id }).populate(
        "author",
        ["fullname"]
      );
      res.json({ success: true, message: "get post success.", posts });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find();
      res.json({ success: true, message: "get all post success.", posts });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  createPost: async (req, res) => {
    const { title, description, attachment, likeCount } = req.body;

    if (!title || !description)
      return res.status(400).json({
        success: false,
        message: "Please fill out the form.",
      });

    try {
      const newPost = new Post({
        title,
        description,
        author: req.user.id,
        attachment: attachment || "",
        likeCount: likeCount || "0",
      });
      await newPost.save();

      res.json({
        success: true,
        message: "Create post success!",
        post: newPost,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  updatePost: async (req, res) => {
    const { title, description, attachment, likeCount } = req.body;

    // Simple validation
    if (!title || !description)
      return res.status(400).json({
        success: false,
        message: "Please fill out the form.",
      });

    try {
      let updatedPost = {
        title,
        description,
        attachment: attachment || "",
        likeCount: likeCount || "0",
      };

      const postUpdateCondition = { _id: req.params.id, author: req.user.id };

      updatedPost = await Post.findOneAndUpdate(
        postUpdateCondition,
        updatedPost,
        { new: true }
      );

      // User not authorised to update post or post not found
      if (!updatedPost)
        return res.status(401).json({
          success: false,
          message: "Post not found or user not authorized",
        });

      res.json({
        success: true,
        message: "Excellent progress!",
        post: updatedPost,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  deletePost: async (req, res) => {
    try {
      const postDeleteCondition = { _id: req.params.id, author: req.user.id };
      const deletedPost = await Post.findOneAndDelete(postDeleteCondition);

      // User not authorized or post not found
      if (!deletedPost)
        return res.status(401).json({
          success: false,
          message: "Post not found or user not authorized",
        });

      res.json({
        success: true,
        message: "delete post success!",
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
};
module.exports = postController;
