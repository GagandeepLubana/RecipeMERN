import React, { useState } from "react";

export const CreateRecipe = () => {
    const [recipe, setRecipe] = useState({
        name: "", 
        ingredients: [],
        instructions: "",
        imageUrl: "",
        cookingTime: 0, 
        userOwner: 0,
    })
  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="name">Ingredients</label>
        <label htmlFor="instructions">Instructions</label>
        <textarea id="instructions" name="instructions"></textarea>
        <label htmlFor="name">name</label>
        <input type="text" id="imageUrl" name="imageUrl" />
        <label htmlFor="cookingTime">Cooking Time (minutes)</label>
        <input type="number" id="cookingTime" name="cookingTime" />
      </form>
    </div>
  );
};
