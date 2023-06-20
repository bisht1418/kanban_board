const { Schema, model } = require("mongoose");

const subTaskSchema = new Schema({
  subTitle: String,
  isCompleted: Boolean,
});

const taskSchema = new Schema({
  title: String,
  description: String,
  status: { type: String, enum: ["Todo", "Doing", "Done"], default: "Todo" },
  subtasks: [subTaskSchema],
});

const boardSchema = new Schema({
  id: String,
  name: String,
  tasks: [taskSchema],
});

const taskModel = model("Task", boardSchema);

module.exports = { taskModel };
