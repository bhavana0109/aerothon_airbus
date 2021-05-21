import asyncHandler from "express-async-handler";
import Bug from "../models/bugModel.js";

// @desc   Create New Bug
// @route  POST /api/bugs
// @access Private
const addBugItems = asyncHandler(async (req, res) => {
  const { bugItems, status, allocatedTo } = req.body;

  if (bugItems && bugItems.length === 0) {
    res.status(400);
    throw new Error("No Bug Items");
    return;
  } else {
    const bug = new Bug({
      bugItems,
      status,
      allocatedTo,
      user: req.user._id,
    });
    const createdBug = await bug.save();
    res.status(201).json(createdBug);
  }
});

// @desc   Get Bug By ID
// @route  GET /api/bugs/:id
// @access Private
const getBugById = asyncHandler(async (req, res) => {
  const bug = await Bug.findById(req.params.id).populate(
    "user",
    "title description"
  );

  if (bug) {
    res.json(bug);
  } else {
    res.status(404);
    throw new Error("Bug Not Found");
  }
});

// @desc   Update Bug To Allocated
// @route  GET /api/bugs/:id/allocated
// @access Private/Admin
const updateBugToAllocated = asyncHandler(async (req, res) => {
  const bug = await Bug.findById(req.params.id);

  if (bug) {
    bug.status = "Allocated";
    bug.allocatedTo = "XYZ";

    const updatedbug = await bug.save();
    res.json(updatedbug);
  } else {
    res.status(404);
    throw new Error("Bug Not Found");
  }
});

// @desc   Update Bug To Solved
// @route  GET /api/bugs/:id/solved
// @access Private/Admin
const updateBugToSolved = asyncHandler(async (req, res) => {
  const bug = await Bug.findById(req.params.id);

  if (bug) {
    bug.status = "Solved";
    bug.allocatedTo = "XYZ";

    const updatedbug = await bug.save();
    res.json(updatedbug);
  } else {
    res.status(404);
    throw new Error("Bug Not Found");
  }
});

// @desc   Get loggedin user bugs
// @route  Get /api/bugs/mybugs
// @access Private
const getMyBugs = asyncHandler(async (req, res) => {
  const bugs = await Order.find({ user: req.user._id });
  res.json(bugs);
});

// @desc   Get all bugs
// @route  Get /api/bugs
// @access Private/Admin
const getBugs = asyncHandler(async (req, res) => {
  const bugs = await Bug.find({}).populate("user", "id title");
  res.json(bugs);
});

export {
  addBugItems,
  getBugById,
  getMyBugs,
  getBugs,
  updateBugToAllocated,
  updateBugToSolved,
};
