const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const TaskSchema = new mongoose.Schema({
  todo: String,
  iscomplete: Boolean,
});

const Task = mongoose.model("task", TaskSchema);

module.exports = Task;
