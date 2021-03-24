const { Post } = require("../models");

exports.userPosts = async (req, res) => {
  try {
    const { userId } = req.query;
    console.log({ userId });
    console.log(req.query);
    const posts = await Post.findAll({ where: { userId } });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.list = async (req, res) => {
  try {
    const { userId } = req.query;
    const posts = await Post.findAll({ where: { userId } });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.postId);
    if (!post) {
      return res.status(404).end();
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.insert = async (req, res) => {
  try {
    //req.body.userId = req.params.userId;
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.patchById = async (req, res) => {
  try {
    const [post] = await Post.update(req.body, {
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(404).end();
    }
    res.status(200).end();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.removeById = async (req, res) => {
  try {
    const deleted = await Post.destroy({ where: { id: req.params.postId } });
    if (!deleted) {
      return res.status(404).end();
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).end();
  }
};
