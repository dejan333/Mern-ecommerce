import express from "express";
const router = express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  getGoals,
  createGoal,
  getGoalById,
  updateGoal,
  deleteGoal,
} from "../controllers/goalController.js";

router.route("/").get(getGoals).post(createGoal);
router.route("/:id").get(getGoalById).put(updateGoal).delete(deleteGoal);

export default router;
