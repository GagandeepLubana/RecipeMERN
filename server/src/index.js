import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { recipeRouter } from "./routes/recipe.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

app.use("/recipes", recipeRouter);

mongoose.connect(
  "mongodb+srv://gagandeeplubana1221:gogogaga@recipes.yxsgzlu.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes"
);

app.listen(3001, () => console.log("server started"));
