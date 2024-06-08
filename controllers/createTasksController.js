const Task = require("../models/tasksModel");

const createTasksController = async (req, res) => {
  const { title, description } = req.body;
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

    const existingTask = await Task.find({ title: title });

    if (existingTask && existingTask.length > 0) {
      return res.send({ error: "Task already exists" });
    } else {
      const task = new Task({
        title: title,
        description: description,
      });
      await task.save();
      res.send({ success: "New task has been created." });
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = createTasksController;
