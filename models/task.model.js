import mongoose, { Schema } from "mongoose";
const taskSchema = new Schema({
  title: String,
  description: String,
  status: { type: String, default: "in-progress" },
  dueDate: String,
});
const Task = mongoose.model("Task", taskSchema);
export { Task };
