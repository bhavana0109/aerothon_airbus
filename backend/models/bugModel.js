import mongoose from "mongoose";

const bugSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    bugItems: [
      {
        title: { type: String, required: true },
        image: { type: String, required: false },
        description: { type: String, required: true },
      },
    ],
    status: {
      type: String,
      required: true,
      default: "Open",
    },
    allocatedTo: {
      type: String,
      required: true,
      default: "None",
    },
  },
  {
    timestamps: true,
  }
);

const Bug = mongoose.model("Bug", bugSchema);

export default Bug;
