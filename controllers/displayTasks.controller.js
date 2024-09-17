import { Task } from "../models/task.model.js";
const displayTasks = async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
};
export { displayTasks };
