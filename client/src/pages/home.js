import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserId";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userId = useGetUserID();
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes", {
          userId,
        });
        setRecipes(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userId}`
        );
        setSavedRecipes(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRecipe();
    fetchSavedRecipe();
  }, []);

  const saveRecipe = async (recipeId) => {
    try {
      const response = await axios.get("http://localhost:3001/recipes", {
        recipeId,
        userId,
      });
      setRecipes(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const isRecipeSaved = (id) => {
    return savedRecipes.includes(id);
  };
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => {
          <li key={recipe._id}>
            {savedRecipes.includes(recipe._id) && <h1>Already Saved</h1>}
            <div>
              <h2>{recipe.name}</h2>
              <button onClick={() => saveRecipe(recipe._id)} disabled={isRecipeSaved(recipe._id)}>Save</button>
              <div className="instructions">
                <p>{recipe.instructions}</p>
              </div>
              <img src={recipe.imageUrl} alt={recipe.name} />
              <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
            </div>
          </li>;
        })}
      </ul>
    </div>
  );
};
