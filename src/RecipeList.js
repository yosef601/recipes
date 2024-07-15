import React from "react";

function RecipeList({ recipes, delRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((rec, index) => (
            <tr key={index}>
              <td>{rec.name}</td>
              <td>{rec.cuisine}</td>
              <td><img src={rec.photo} alt={rec.name} style={{ maxWidth: "100px", height: "auto" }} /></td>
              <td className="content_td"><p>{(rec.ingredients)}</p></td>
              <td className="content_td"><p>{(rec.preparation)}</p></td>
              <td><button name="delete" onClick={() => delRecipe(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
