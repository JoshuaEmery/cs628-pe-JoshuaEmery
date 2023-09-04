const asyncHandler = require("express-async-handler");
//it is good practice to create a controller with CRUD functionality
//this methods will be called by the router
//import the model
const Recipe = require("../models/recipeModel");
const { default: mongoose } = require("mongoose");
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
  if (!req.body.title || !req.body.instructions || !req.body.ingredients) {
    res.status(400);
    throw new Error("name, amount, instructions, and ingredients are required");
  }
  console.log(req.body);
  const recipe = await Recipe.create({
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  });
  return res.status(201).json(recipe);
});

//update Recipe
//PUT API/RecipeS/:id
const updateRecipe = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("id is required");
  }
  //checl for the following properties
  if (!req.body.title || !req.body.instructions || !req.body.ingredients) {
    res.status(400);
    throw new Error("name, amount, instructions, and ingredients are required");
  }
  console.log(req.body);
  //find and update can be done in one step
  const newRecipe = {
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  };
  //The mongoose library can generate ids using mongoose.Types.ObjectId()
  //iterate through ingredients and instructions
  newRecipe.ingredients.map((ingredient) => {
    if (!ingredient._id) {
      ingredient._id = new mongoose.Types.ObjectId().toString();
    }
    return ingredient;
  });
  newRecipe.instructions.map((instruction) => {
    if (!instruction._id) {
      instruction._id = new mongoose.Types.ObjectId().toString();
    }
    return instruction;
  });
  console.log(newRecipe);
  //use newRecipe to find and update the recipe
  recipe = await Recipe.findByIdAndUpdate(req.params.id, newRecipe, {
    new: true,
    runValidators: true,
  });
  res.status(200).json(recipe);
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

//create an endpoint to seed the database
//this is a POST request to API/RecipeS/seed
const seed = asyncHandler(async (req, res) => {
  //create an array of Recipes
  // Sample seed data
  const seedData = [
    {
      title: "Pancakes",
      ingredients: [
        { name: "Flour", amount: "1 cup" },
        { name: "Milk", amount: "1/2 cup" },
        { name: "Egg", amount: "1" },
      ],
      instructions: [
        { step: "Mix all ingredients", stepNumber: 1 },
        { step: "Pour into pan", stepNumber: 2 },
        { step: "Flip when bubbles form", stepNumber: 3 },
      ],
    },
    {
      title: "Spaghetti Carbonara",
      ingredients: [
        { name: "Spaghetti", amount: "200g" },
        { name: "Egg", amount: "2" },
        { name: "Parmesan Cheese", amount: "1/2 cup" },
        { name: "Pancetta", amount: "100g" },
      ],
      instructions: [
        { step: "Boil spaghetti", stepNumber: 1 },
        { step: "Fry pancetta", stepNumber: 2 },
        { step: "Mix eggs and cheese", stepNumber: 3 },
        { step: "Combine all", stepNumber: 4 },
      ],
    },
    {
      title: "Chicken Curry",
      ingredients: [
        { name: "Chicken", amount: "500g" },
        { name: "Curry Paste", amount: "2 tbsp" },
        { name: "Coconut Milk", amount: "1 can" },
      ],
      instructions: [
        { step: "Fry chicken", stepNumber: 1 },
        { step: "Add curry paste", stepNumber: 2 },
        { step: "Add coconut milk", stepNumber: 3 },
        { step: "Simmer until cooked", stepNumber: 4 },
      ],
    },
    {
      title: "Veggie Stir-Fry",
      ingredients: [
        { name: "Broccoli", amount: "1 cup" },
        { name: "Carrot", amount: "1" },
        { name: "Bell Pepper", amount: "1" },
        { name: "Soy Sauce", amount: "2 tbsp" },
      ],
      instructions: [
        { step: "Chop veggies", stepNumber: 1 },
        { step: "Stir-fry veggies", stepNumber: 2 },
        { step: "Add soy sauce", stepNumber: 3 },
      ],
    },
    {
      title: "Chocolate Chip Cookies",
      ingredients: [
        { name: "Flour", amount: "2 cups" },
        { name: "Sugar", amount: "1 cup" },
        { name: "Chocolate Chips", amount: "1 cup" },
        { name: "Butter", amount: "1/2 cup" },
      ],
      instructions: [
        { step: "Mix flour and sugar", stepNumber: 1 },
        { step: "Add melted butter", stepNumber: 2 },
        { step: "Add chocolate chips", stepNumber: 3 },
        { step: "Bake at 350°F", stepNumber: 4 },
      ],
    },
  ];
  // Delete all existing recipes
  await Recipe.deleteMany({});

  // Insert the seed data
  await Recipe.insertMany(seedData);

  res.status(201).json({ message: "Seed data generated successfully" });
});

module.exports = {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  seed,
};
