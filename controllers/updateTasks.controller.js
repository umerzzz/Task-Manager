import { Task } from "../models/task.model.js";

const updateTasks = async (req, res) => {
  const { id } = req.params;
  const { title, description, status, dueDate } = req.body;
  if (!title || !description || !status || !dueDate) {
    return res.status(400).json({ message: "All Fields are required" });
  }
  try {
    const task = await Task.findByIdAndUpdate(
      id,
      {
        title,
        description,
        status,
        dueDate,
      },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export { updateTasks };
