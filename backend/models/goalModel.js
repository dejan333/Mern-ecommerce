import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
  {
    goalTitle: {
      type: "string",
      required: true,
    },
    isCompleted: {
      type: "boolean",
      required: true,
      default: false,
    },
    score: {
      type: "number",
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);

const Goal = mongoose.model("Goal", goalSchema);

export default Goal;
