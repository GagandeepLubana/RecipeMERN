import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/create-recipe">Create Recipe</Link>
      <Link to="/saved-recipes">Saved Recipes</Link>
    <button> Logout </button>
      
    </div>
  );
};