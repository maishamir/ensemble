import express from "express";
import {
  createOutfit,
  getOutfits,
  getOutfitById,
  updateOutfit,
  deleteOutfit,
} from "../controllers/outfitController.js";

const router = express.Router();

router.route("/").get(getOutfits).post(createOutfit);
router.route("/:id").get(getOutfitById).put(updateOutfit).delete(deleteOutfit);

export default router;
