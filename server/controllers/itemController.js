import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import path from "path";
import fs from "fs";

const getRecentClothingItems = async (req, res) => {
  try {
    const recents = await knex("clothing_item").orderBy('created_at', 'desc').limit(3);
    res.status(200).json(recents);
  } catch (e) {
    console.error(`Error retrieving recent items: ${e}`);
    res.status(500).json({ message: `Error retrieving recent items: ${e.message}` });
  }
}

const createClothingItem = async (req, res) => {
  try {
    const { name, category, size } = req.body;
    const [id] = await knex("clothing_item").insert({ name, category, size });
    res.status(201).json({ id });
  } catch (error) {
    console.error(`System error creating clothing item: ${error}`);
    res.status(500).json({ message: `System error creating clothing item: ${error.message}` });
  }
};

const uploadImage = async (req, res) => {
  try {
    const { image, clothingItemId } = req.body;

    if (!image || !clothingItemId) {
      return res.status(400).json({ message: "Image and clothingItemId are required." });
    }

    console.log('Received image for clothing item ID:', clothingItemId);

    const base64URL = image.replace(/^data:image\/png;base64,/, "");

    const imageName = `${Date.now()}.jpg`;
    const imageURL = path.join(__dirname, "..", "uploads", imageName);

    const uploadsDir = path.join(__dirname, "..", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir);
    }

    console.log('Saving image to:', imageURL);
    await fs.promises.writeFile(imageURL, base64URL, "base64");

    const imagePath = `/uploads/${imageName}`;

    console.log('Updating clothing item with image path:', imagePath);
    await knex("clothing_item")
      .where({ id: clothingItemId })
      .update({ image_url: imagePath });

    res.status(200).json({
      message: "Image uploaded successfully",
      path: imagePath,
    });
  } catch (e) {
    console.error('Error uploading image:', e);
    res.status(500).json({ message: `Error uploading image: ${e.message}` });
  }
};

const getClothingItems = async (req, res) => {
  try {
    const items = await knex("clothing_item").select("*");
    res.status(200).json(items);
  } catch (e) {
    console.error(`Error retrieving items: ${e}`);
    res.status(500).json({ message: `Error retrieving items: ${e.message}` });
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
    console.error(`Error retrieving item: ${e}`);
    res.status(500).json({ message: `Error retrieving item: ${e.message}` });
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
    console.error(`Error updating item: ${e}`);
    res.status(500).json({ message: `Error updating item: ${e.message}` });
  }
};

const deleteClothingItem = async (req, res) => {
  try {
    await knex("clothing_item").where({ id: req.params.id }).del();
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (e) {
    console.error(`Item could not be deleted: ${e}`);
    res.status(500).json({ message: `Item could not be deleted: ${e.message}` });
  }
};

export {
  getRecentClothingItems,
  createClothingItem,
  uploadImage,
  getClothingItems,
  getClothingItemById,
  updateClothingItem,
  deleteClothingItem,
};
