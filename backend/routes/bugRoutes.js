import express from "express";
import {
  addBugItems,
  getBugById,
  getMyBugs,
  getBugs,
  updateBugToAllocated,
  updateBugToSolved,
} from "../controllers/bugController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addBugItems).get(protect, admin, getBugs);
router.route("/mybugs").get(protect, getMyBugs);
router.route("/:id").get(protect, getBugById);
router.route("/:id/solved").put(protect, updateBugToSolved);
router.route("/:id/allocated").put(protect, admin, updateBugToAllocated);

export default router;
