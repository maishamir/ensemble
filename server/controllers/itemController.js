import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import multer from "multer";
import path from "path";
import fs from "fs";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// setup multer to use memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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
    const [id] = await knex("clothing_item").insert({ name, category, size })
    res.status(201).json({ id });
  } catch (error) {
    console.error(`System error creating clothing item: ${error}`);
    res.status(500).json({ message: `System error creating clothing item: ${error.message}` });
  }
};

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    const { originalname, buffer, mimetype } = req.file;
    const { clothingItemId } = req.body;

    if (!clothingItemId) {
      return res.status(400).json({ message: "clothingItemId is required." });
    }

    console.log('Uploaded image details:', { originalname, buffer, mimetype });
    console.log('Uploaded image for clothing item id:', clothingItemId);

    const imagePath = path.join(__dirname, '..', 'uploads', originalname);

    // Save the file to the uploads directory
    fs.writeFileSync(imagePath, buffer);

    const imageUrl = `http://localhost:3000/uploads/${originalname}`; // Construct the full URL

    await knex('clothing_item').where({ id: clothingItemId }).update({
      image_name: originalname,
      image_data: buffer,
      image_mimetype: mimetype,
      image_url: imageUrl,
    });

    res.status(200).json({
      message: "Image uploaded and stored in db",
      path: imageUrl,
      clothingId: clothingItemId
    });
  } catch (e) {
    console.error("Error uploading image: ", e);
    res.status(500).json({ message: "Error uploading image", error: e.message });
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
      res.status(404).json({ message: "Item not found" });
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
