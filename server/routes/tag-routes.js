import express from "express";

import {
  createTag,
  getTags,
  updateTag,
  deleteTag,
} from "../controllers/tagController.js";

const router = express.Router();

router.route('/').get(getTags).post(createTag)
router.route('/:id').put(updateTag).delete(deleteTag)

export default router;
