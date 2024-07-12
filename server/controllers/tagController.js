import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const createTag = async (req, res) => {
  try {
    const { name } = req.body;
    const [id] = await knex("outfit").insert({ name });
    res.status(201).json({ id });
  } catch (e) {
    res.status(500).json({ message: `Error creating tag: ${e}` });
  }
};

const getTags = async (req, res) => {
  try {
    const tags = await knex("tags").select("*");
    res.status(200).json(tags);
  } catch (e) {
    res.status(500).json({ message: `Error retrieving tags: ${e}` });
  }
};

const updateTag = async (req, res) => {
  try {
    const { name } = req.body;
    await knex("outfit").where({ id: req.params.id }).update({ name });
    res.status(200).json({ message: "Tag updated successfully" });
  } catch (e) {
    res.status(500).json({ message: "Tag updating outfit: ", e });
  }
};

const deleteTag = async (req, res) => {
  try {
    await knex("tag".where({ id: req.params.id })).del();
    res.status(200).json({ message: "tag deleted successfully" });
  } catch (e) {
    res.status(500).json({ message: `tag could not be deleted: ${e}` });
  }
};

export { createTag, getTags, updateTag, deleteTag };
