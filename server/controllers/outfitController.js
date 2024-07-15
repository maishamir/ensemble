import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const createOutfit = async (req, res) => {
  try {
    const { date, description, clothing_item_ids, thumbnail, name } = req.body;

    // Format the date
    const formattedDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');

    const [id] = await knex('outfit').insert({
      date: formattedDate,
      description,
      clothing_item_ids,  // Assuming clothing_item_ids is already an array and knex will handle it correctly
      thumbnail,
      name,
    });

    res.status(201).json({ id });
  } catch (e) {
    console.error(`Error creating outfit: ${e.message}`);
    res.status(500).json({ message: `Error creating outfit: ${e.message}` });
  }
};




const getRecentOutfits = async (req, res) => {
  try {
    const recents = await knex("outfit").orderBy('created_at', 'desc').limit(3);
    res.status(200).json(recents);
  } catch (e) {
    console.error(`Error retrieving recent outfits: ${e}`);
    res.status(500).json({ message: `Error retrieving recent outfits: ${e.message}` });
  }
}

const getOutfits = async (req, res) => {
  try {
    const outfits = await knex('outfit').select('*');
    res.status(200).json(outfits);
  } catch (e) {
    console.error(`Error retrieving outfits: ${e}`);
    res.status(500).json({ message: `Error retrieving outfits: ${e.message}` });
  }
}

const getOutfitById = async (req, res) => {
  try {
    const outfit = await knex("outfit").where({ id: req.params.id }).first();

    if (!outfit) {
      return res.status(404).json({ message: "Outfit not found" });
    }

    const clothingItemIds = outfit.clothing_item_ids;

    const clothingItems = await knex("clothing_item")
      .whereIn("id", clothingItemIds)
      .select("id", "name", "image_url");

    outfit.clothing_items = clothingItems;

    res.status(200).json(outfit);
  } catch (e) {
    console.error(`Error retrieving outfit: ${e.message}`);
    res.status(500).json({ message: `Error retrieving outfit: ${e.message}` });
  }
};






const updateOutfit = async (req, res) => {
  try {
    const { date, description, clothing_item_ids, images } = req.body;
    await knex('outfit').where({ id: req.params.id }).update({ date, description, clothing_item_ids, images });
    res.status(200).json({ message: 'Outfit updated successfully' });
  } catch (e) {
    console.error(`Error updating outfit: ${e}`);
    res.status(500).json({ message: `Error updating outfit: ${e.message}` });
  }
}

const deleteOutfit = async (req, res) => {
  try {
    await knex('outfit').where({ id: req.params.id }).del();
    res.status(200).json({ message: "Outfit deleted successfully" });
  } catch (e) {
    console.error(`Error deleting outfit: ${e}`);
    res.status(500).json({ message: `Outfit could not be deleted: ${e.message}` });
  }
}

export {
  getRecentOutfits,
  createOutfit,
  getOutfits,
  getOutfitById,
  updateOutfit,
  deleteOutfit
}
