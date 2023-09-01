const asyncHandler = require("express-async-handler");
//it is good practice to create a controller with CRUD functionality
//this methods will be called by the router
//import the model
const Recipe = require("../models/recipeModel");
//this Model contains all of the built in Mongo methods for
//crud operations

//get all recipes
//GET API/RECIPES
const getRecipes = asyncHandler(async (req, res) => {
  //get all Recipes using mongoose
  const recipes = await Recipe.find();
  res.status(200).json(recipes);
});

//get Recipe by id
//GET API/RecipeS/:id
const getRecipeById = asyncHandler(async (req, res) => {
  //get one Recipe by id. First check to see ID has a value
  //check to make sure an id was passed
  if (!req.params.id) {
    //bad request
    res.status(400);
    throw new Error("id is requred");
  }
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) {
    //no Recipe was found
    res.status(404);
    throw new Error("no such Recipe");
  }
  res.status(200).json(recipe);
});

//create Recipe
//POST API/RecipeS
const createRecipe = asyncHandler(async (req, res) => {
  //checl for the following properties
  if (
    !req.body.name ||
    !req.body.amount ||
    !req.body.instructions ||
    !req.body.ingredients
  ) {
    res.status(400);
    throw new Error("name, amount, instructions, and ingredients are required");
  }
  const Recipe = await Recipe.create({
    name: req.body.name,
    amount: req.body.amount,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  });
  return res.status(201).json(Recipe);
});

//update Recipe
//PUT API/RecipeS/:id
const updateRecipe = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("id is required");
  }
  //checl for the following properties
  if (
    !req.body.name ||
    !req.body.amount ||
    !req.body.instructions ||
    !req.body.ingredients
  ) {
    res.status(400);
    throw new Error("name, amount, instructions, and ingredients are required");
  }
  //find and update can be done in one step
  const Recipe = await Recipe.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      amount: req.body.amount,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
    },
    { new: true }
  );
  res.status(200).json(Recipe);
});

//delete Recipe
//DELETE API/RecipeS/:id
const deleteRecipe = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("id is required");
  }
  //find by and delete can be completed in one step
  const deleteRecipe = await Recipe.findByIdAndDelete(req.params.id);
  res.status(200).json(deleteRecipe);
});

module.exports = {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
