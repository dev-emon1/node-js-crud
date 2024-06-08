const Task = require("../models/tasksModel");

const getAllTasksController = async (req, res) => {
  try {
    const tasksData = await Task.find();
    res.send(tasksData);
  } catch (error) {
    res.send(error);
  }
};

module.exports = getAllTasksController;
