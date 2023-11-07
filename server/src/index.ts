import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import * as recipeApi from "./recipe-api";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/recipe/search", async (req, res) => {
  const searchTerm = req.query.searchTerm as string;
  const page = parseInt(req.query.page as string);

  const results = await recipeApi.searchRecipes(searchTerm, page);
  return res.json(results);
});

app.get("/api/recipe/:recipeId/summary", async (req, res) => {
  const recipeId = req.params.recipeId;
  const result = await recipeApi.getRecipeSummary(recipeId);
  res.json(result);
});

app.listen(5000, () => {
  console.log("Server running on localhost:5000");
});
