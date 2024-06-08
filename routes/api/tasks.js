const express = require("express");
const createTasksController = require("../../controllers/createTasksController");
const getAllTasksController = require("../../controllers/getAllTasksController");
const updateTaskController = require("../../controllers/updateTaskController");
const deleteTasksController = require("../../controllers/deleteTaskController");
const verifyToken = require("../../middlewares/verifyToken");
const route = express.Router();

route.post("/tasks", verifyToken, createTasksController);
route.get("/tasks", verifyToken, getAllTasksController);
route.patch("/tasks/:id", verifyToken, updateTaskController);
route.delete("/tasks/:id", verifyToken, deleteTasksController);

module.exports = route;
