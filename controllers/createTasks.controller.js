import { Task } from "../models/task.model.js";
const createTasks = async (req, res) => {
  const { title, description, status, dueDate } = req.body;
  if (!(title && description && dueDate)) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const newTask = new Task({ title, description, status, dueDate });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export { createTasks };
