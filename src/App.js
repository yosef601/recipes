import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const addRec = (recipe) => {
      setRecipes((prevRecipe) => [...prevRecipe, recipe]);
  }
  
  const delRecipe = (index) => {
      setRecipes((prevRecipe) => prevRecipe.filter((_, i) => i !== index));
  }

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} delRecipe={delRecipe}/>
      <RecipeCreate addRec={addRec} />
    </div>
  );
}

export default App;