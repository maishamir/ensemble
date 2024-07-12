import initKnex from "knex";
import configuration from "./knexfile.js";
const knex = initKnex(configuration);
import itemRoutes from "./routes/item-routes.js";
import outfitRoutes from "./routes/outfit-routes.js";
import tagRoutes from "./routes/tag-routes.js";

import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/clothing_item", itemRoutes);
app.use("/outfit", outfitRoutes);
app.use("/tag", tagRoutes);

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
