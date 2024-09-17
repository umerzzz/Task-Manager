import express from "express";
import { displayTasks } from "../controllers/displayTasks.controller.js";
import { createTasks } from "../controllers/createTasks.controller.js";
import { deleteTasks } from "../controllers/deleteTasks.controller.js";
import { updateTasks } from "../controllers/updateTasks.controller.js";
const router = express.Router();

router.post("/create", createTasks);
router.delete("/delete/:id", deleteTasks);
router.put("/update/:id", updateTasks);
router.get("/tasks", displayTasks);

export { router };
