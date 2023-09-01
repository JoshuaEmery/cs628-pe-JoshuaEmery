//This file contains all of the routes for the Recipes collection
//This is better practice than placing them all in the server.js file
const express = require("express");
const router = express.Router();
//here we import the controller
const {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

//setup the routes to use the controller
//this can be done in one step if two methods have the same route but different HTTP verbs
//Get request to API/Recipes will go to getRecipes, Post request to API/Recipes will go to createRecipe
router.route("/").get(getRecipes).post(createRecipe);
//get by id
router.get("/:id", getRecipeById);
//update by id
router.put("/:id", updateRecipe);
//delete by id
router.delete("/:id", deleteRecipe);

module.exports = router;
