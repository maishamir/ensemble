import express from "express";
import {
  getRecentOutfits,
  createOutfit,
  getOutfits,
  getOutfitById,
  updateOutfit,
  deleteOutfit,
} from "../controllers/outfitController.js";

const router = express.Router();

router.route("/").get(getOutfits).post(createOutfit);
router.route("/recent").get(getRecentOutfits);
router.route("/:id").get(getOutfitById).put(updateOutfit).delete(deleteOutfit);

export default router;
