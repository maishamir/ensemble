import express from "express";
import {
  createClothingItem,
  uploadImage,
  getClothingItems,
  getClothingItemById,
  updateClothingItem,
  deleteClothingItem,
} from "../controllers/itemController.js";
const router = express.Router();

router.route("/").get(getClothingItems).post(createClothingItem);
router.route("/upload", uploadImage);
router
  .route("/:id")
  .get(getClothingItemById)
  .put(updateClothingItem)
  .delete(deleteClothingItem);

export default router;