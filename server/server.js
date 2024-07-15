import initKnex from "knex";
import configuration from "./knexfile.js";
const knex = initKnex(configuration);
import itemRoutes from "./routes/item-routes.js";
import outfitRoutes from "./routes/outfit-routes.js";
import tagRoutes from "./routes/tag-routes.js";
import cors from "cors";
import weatherRoutes from "./routes/weather-routes.js"

import express from "express";    
const app = express();
const PORT = 3000;

app.use (cors());
app.use(express.json({limit: '50mb'}));

app.use("/uploads", express.static('uploads'))

app.use("/clothing_item", itemRoutes);
app.use("/outfit", outfitRoutes);
app.use("/tag", tagRoutes);
app.use("/weather", weatherRoutes);

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
