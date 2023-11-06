import "./App.css";
import React, { FormEvent, useState } from "react";
import { searchRecipes } from "./Api";
import { Recipe } from "./types";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("burgers");
  const [recipes, setRecipes] = useState([]);

  const handleSearchSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { results } = await searchRecipes(searchTerm, 1);
      setRecipes(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <button type="submit">Submit</button>
      </form>
      {recipes.map((recipe: Recipe) => (
        <div key={recipe.id}>
          Recipe Image Location: {recipe.image}
          <br />
          Recipe Title: {recipe.title}
        </div>
      ))}
    </div>
  );
};

export default App;
