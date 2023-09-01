const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    //ingredients is a collection
    ingredients: [
      {
        name: { type: String, required: true },
        amount: { type: String, required: true },
      },
    ],
    //instructions should also be a collection
    instructions: [
      {
        step: { type: String, required: true },
        stepNumber: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);
//export the model
module.exports = mongoose.model("Recipe", recipeSchema);
