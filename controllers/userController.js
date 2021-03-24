const { User, Post } = require("../models/");

exports.list = async (req, res) => {
  try {
    const users = await User.findAll({ include: [Post] });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId, { include: [Post] });
    if (!user) {
      return res.status(404).end();
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.insert = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user.id);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.patchById = async (req, res) => {
  try {
    const [user] = await User.update(req.body, {
      where: { id: req.params.userId },
    });
    if (!user) {
      return res.status(404).end();
    }
    res.status(200).end();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.removeById = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.userId } });
    if (!deleted) {
      return res.status(404).end();
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).end();
  }
};
