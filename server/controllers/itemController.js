import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import path from "path";
import fs from "fs";


const createClothingItem = async (req, res) => {
  try {
    const { name, category, size } = req.body;
    const [id] = await knex("clothing_item").insert({ name, category, size });
    res.status(201).json({ id });
  } catch (error) {
    res
      .status(500)
      .json({ message: `System error creating clothing item: ${error}` });
  }
};

const uploadImage = async (req, res) => {
  try {
    const { image, clothingItemId } = req.body;
    const base64URL = image.replace(/^data:image\/png;base64,/, "");
    const imageName = `${Date.now()}.jpg`;
    const imageURL = path.join(__dirname, "uploads", imageName);

    await fs.promises.writeFile(imageURL, base64URL, "base64");

    const imagePath = `/uploads/${imageName}`;
    await knex("clothing_item")
      .where({ id: clothingItemId })
      .update({ image_url: imagePath });

    res.status(200).json({
      message: "Image uploaded successfully",
      path: imagePath,
    });
  } catch (e) {
    res.status(500).json({ message: `Error uploading image: ${e}` });
  }
};

const getClothingItems = async (req, res) => {
  try {
    const items = await knex("clothing_item").select("*");
    res.status(200).json(items);
  } catch (e) {
    res.status(500).json({ message: `Error retrieving items: ${e}` });
  }
};

const getClothingItemById = async (req, res) => {
  try {
    const item = await knex("clothing_item")
      .where({ id: req.params.id })
      .first();
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "item not found" });
    }
  } catch (e) {
    res.status(500).json({ message: `Error retrieving item: ${e}` });
  }
};

const updateClothingItem = async (req, res) => {
  try {
    const { name, category, size } = req.body;
    await knex("clothing_item")
      .where({ id: req.params.id })
      .update({ name, category, size });
    res.status(200).json({ message: "Item updated successfully" });
  } catch (e) {
    res.status(500).json({ message: "Error updating item: ", e });
  }
};

const deleteClothingItem = async (req, res) => {
  try {
    await knex("clothing_item").where({ id: req.params.id }).del();
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (e) {
    res.status(500).json({ message: `Item could not be deleted: ${e}` });
  }
};

export {
  createClothingItem,
  uploadImage,
  getClothingItems,
  getClothingItemById,
  updateClothingItem,
  deleteClothingItem,
};
