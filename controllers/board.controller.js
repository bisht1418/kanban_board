const { taskModel } = require("../models/board.model");

const postBoard = async (req, res) => {
  try {
    const newBoard = new taskModel(req.body);
    await newBoard.save();

    res.json({ newBoard });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getBoard = async (req, res) => {
  try {
    const newBoard = await taskModel.find({});
    console.log(newBoard);
    res.json({ newBoard });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { getBoard, postBoard };
