import express from "express";
import multer from "multer";
import {
  getRecentClothingItems,
  createClothingItem,
  uploadImage,
  getClothingItems,
  getClothingItemById,
  updateClothingItem,
  deleteClothingItem,
} from "../controllers/itemController.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.route("/").get(getClothingItems).post(createClothingItem);
router.route("/recent").get(getRecentClothingItems);
router.route("/upload").post(upload.single('file'), uploadImage); // Correctly use multer middleware and controller
router
  .route("/:id")
  .get(getClothingItemById)
  .put(updateClothingItem)
  .delete(deleteClothingItem);


export default router;
