const Task = require("../models/tasksModel");

const deleteTasksController = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await Task.findByIdAndDelete({ _id: id });
    if (tasks) {
      return res.send({ success: "Task has been deleted" });
    } else {
      return res.send({ error: "No task found" });
    }
  } catch (error) {
    if (error.name == "CastError") {
      return res.send({ error: "Invalid ID" });
    }
  }
};

module.exports = deleteTasksController;
