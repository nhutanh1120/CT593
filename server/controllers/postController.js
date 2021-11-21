const Post = require("./../models/Post");
const Users = require("./../models/Users");

const postController = {
  getPosts: async (req, res) => {
    try {
      console.log("Get post");
      const posts = await Post.find({ author: req.user.id }).populate(
        "author",
        ["forename", "surname"]
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
      console.log("Get all post");
      const posts = await Post.find().populate("author", [
        "forename",
        "surname",
        "images",
      ]);
      res.json({ success: true, message: "get all post success.", posts });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  createPost: async (req, res) => {
    console.log("Create post");
    const { title, description, attachment, ...rest } = req.body;

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
        ...rest,
      });
      await newPost.save();

      const userNotification = await Users.findByIdAndUpdate(
        req.user.id,
        {
          $push: {
            message: {
              title: title,
              status: "create_post",
            },
          },
        },
        { new: true }
      );

      res.json({
        success: true,
        message: "Create post success!",
        post: newPost,
        notification: userNotification.message,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  updatePost: async (req, res) => {
    console.log("Update post");
    const { title, description, attachment, ...rest } = req.body;

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
        ...rest,
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

      const userNotification = await Users.findByIdAndUpdate(
        req.user.id,
        {
          $push: {
            message: {
              title: title,
              status: "update_post",
            },
          },
        },
        { new: true }
      );

      res.json({
        success: true,
        message: "Excellent progress!",
        post: updatedPost,
        notification: userNotification.message,
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
      console.log("Delete post");
      const postDeleteCondition = { _id: req.params.id, author: req.user.id };
      const deletedPost = await Post.findOneAndDelete(postDeleteCondition);

      // User not authorized or post not found
      if (!deletedPost)
        return res.status(401).json({
          success: false,
          message: "Post not found or user not authorized",
        });

      const userNotification = await Users.findByIdAndUpdate(
        req.user.id,
        {
          $push: {
            message: {
              title: "Quản trị viên",
              status: "delete_post",
            },
          },
        },
        { new: true }
      );

      res.json({
        success: true,
        message: "delete post success!",
        notification: userNotification.message,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  likePost: async (req, res) => {
    try {
      console.log("Like post");
      const likePost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $push: { likeCount: req.user.id },
        },
        { new: true }
      );

      // User not authorized or post not found
      if (!likePost)
        return res.status(401).json({
          success: false,
          message: "Post not found or user not authorized",
        });

      res.json({
        success: true,
        message: "like post success!",
        post: likePost,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  unLikePost: async (req, res) => {
    try {
      console.log("Unlike post");
      const unLikePost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { likeCount: req.user.id },
        },
        { new: true }
      );

      // User not authorized or post not found
      if (!unLikePost)
        return res.status(401).json({
          success: false,
          message: "Post not found or user not authorized",
        });

      res.json({
        success: true,
        message: "unlike post success!",
        post: unLikePost,
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
