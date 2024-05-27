import React, {useState} from 'react';
import { Link } from "react-router-dom"

export const Navbar = () => {
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/create-recipe">Create Recipe</Link>
        <Link to="/saved-recipe">Saved Recipes</Link>
        <Link to="auth">Login</Link>
    </div>
}