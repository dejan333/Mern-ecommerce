import asyncHandler from "../middleware/asyncHandler.js";
import Goal from "../models/goalModel.js";

// @desc    Fetch all goals
// @route   GET /api/goals
// @access  Public
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({});
  res.json(goals);
});

// @desc    Fetch single goal
// @route   GET /api/goals/:id
// @access  Public
const getGoalById = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (goal) {
    return res.json(goal);
  } else {
    res.status(404);
    throw new Error("Goal not found");
  }
});

// @desc    Create goal
// @route   POST /api/goals/
// @access  Public
const createGoal = asyncHandler(async (req, res) => {
  const { goalTitle, score } = req.body;
  const goal = new Goal({ goalTitle, score });
  const createdGoal = await goal.save();
  res.status(201).json(createdGoal);
});

// @desc    Update goal
// @route   Put /api/goals/:id
// @access  Public
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (goal) {
    goal.isCompleted = !goal.isCompleted;

    const updatedGoal = await goal.save();
    res.json(updatedGoal);
  } else {
    res.status(404);
    throw new Error("Goal not found");
  }
});

// @desc    Delete goal
// @route   Delete /api/goals/:id
// @access  Public
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.deleteOne({ _id: req.params.id });

  if (goal.deletedCount === 1) {
    res.status(200).json({ message: "Goal deleted successfully" });
  } else {
    res.status(404);
    throw new Error("Goal not found");
  }
});

export { getGoalById, getGoals, createGoal, updateGoal, deleteGoal };
