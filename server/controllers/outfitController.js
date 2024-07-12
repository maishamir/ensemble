import initKnex from "knex";
import configuration from "../knexfile.js"
const knex = initKnex(configuration);

const createOutfit = async (req, res) => {
    try {
        const { date, description, clothing_item_ids, images } = req.body;
        const [id] = await knex('outfit').insert({ date, description, clothing_item_ids, images })
        res.status(201).json({id})
    } catch (e) {
        res.status(500).json({ message: `Error creating outfit: ${e}` });
    }
}

const getOutfits = async (req, res) => {
    try {
        const outfits = await knex('outfit').select('*')
        res.status(200).json(outfits)
    }
    catch (e) {
        res.status(500).json({ message: `Error retrieving outfits: ${e}` });
    }
}

 const getOutfitById = async (req, res) => {
    try {
        const outfit = await knex("outfit").where({ id: req.params.id }).first();
        if (outfit) {
            res.status(200).json(outfit)
        } else {
            res.status(404).json({message: 'outfit not found'})
        }
    } catch (e) {
        res.status(500).json({message: `Error retrieving outfit: ${e}`})
    }
 }

 const updateOutfit = async (req, res) => {
    try {
        const { date, description, clothing_item_ids, images } = req.body;
        await knex('outfit').where({ id: req.params.id }).update({ date, description, clothing_item_ids, images });
        res.status(200).json({message: 'Outfit updated successfully'})
    } catch (e) {
        res.status(500).json({message: 'Error updating outfit: ', e})
    }
 }

const deleteOutfit = async (req, res) => {
    try {
        await knex('outfit'.where({ id: req.params.id })).del();
        res.status(200).json({message: "Outfit deleted successfully"})
    } catch (e) {
        res.status(500).json({message: `Outfit could not be deleted: ${e}`})
    }
}

export {
    createOutfit,
    getOutfits,
    getOutfitById,
    updateOutfit,
    deleteOutfit
}