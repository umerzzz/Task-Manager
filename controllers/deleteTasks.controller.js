import { Task } from "../models/task.model.js";

const deleteTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deleteTasks) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json({ message: "Task Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: "internal Server Error" });
  }
};
export { deleteTasks };
