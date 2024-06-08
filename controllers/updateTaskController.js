const Task = require("../models/tasksModel");

const updateTaskController = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;

  try {
    if (!title || !description) {
      return res.send({ error: "Require all fields" });
    }
    if (title && title.length > 30) {
      return res.send({ error: "Title is too long" });
    }
    if (title && title.length < 5) {
      return res.send({ error: "Title is too short" });
    }
    if (description && description.length > 120) {
      return res.send({ error: "Description is too long" });
    }
    if (description && description.length < 10) {
      return res.send({ error: "Description is too short" });
    }

    const findTask = await Task.find({ _id: id });

    if (findTask && findTask.length > 0) {
      const tasks = await Task.findByIdAndUpdate(
        req.params.id,
        { title, description },
        { new: true }
      );
      await tasks.save();
      res.send({ success: "Task updated" });
    } else {
      return res.send({ error: "Invalid ID" });
    }
  } catch (error) {
    if (error.name == "CastError") {
      return res.send({ error: "Invalid ID" });
    }
  }
};

module.exports = updateTaskController;
