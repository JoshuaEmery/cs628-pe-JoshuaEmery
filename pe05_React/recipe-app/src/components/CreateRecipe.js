import { useState } from "react";
import { createRecipe } from "../data/repository";

function CreateRecipe() {
  //Track the title
  const [title, setTitle] = useState("");
  //track the instructions, these are an array
  //start with 1 blank instruction in the array
  const [instructions, setInstructions] = useState([
    { step: "", stepNumber: 1 },
  ]);
  //track the ingredients, these are also an array
  //start with one empty ingredient in the array
  const [ingredients, setIngredients] = useState([{ name: "", amount: "" }]);
  //change handler for title
  const titleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  //this function simply creates a new empty ingredient in the array
  //since ingredients is tracked by state and mapped in the UI
  //This will cause a new empty inputfield to appear
  const nextIngredient = () => {
    setIngredients((currentIngredients) => {
      //console.log(currentIngredients);
      return [...currentIngredients, { name: "", amount: "" }];
    });
  };
  // similar logic here however we need to update the stepnumber
  const nextInstruction = () => {
    console.log(instructions);
    setInstructions((currentInstructions) => {
      return [
        ...currentInstructions,
        { step: "", stepNumber: currentInstructions.length + 1 },
      ];
    });
  };
  const submitRecipe = () => {
    //if the last index of instructions or ingredients is empty omit from the submission

    //ARG this took me so long to find!!
    const filteredIngredients = ingredients.slice(0, -1); // Omit last element
    const filteredInstructions = instructions.slice(0, -1); // Omit last element

    const recipe = {
      title,
      ingredients: filteredIngredients,
      instructions: filteredInstructions,
    };

    console.log(recipe);
    createRecipe(recipe);
  };
  return (
    <>
      <h2>Create Recipe</h2>

      <div>
        <label htmlFor="">
          Recipe Name:
          <input onChange={titleChange} type="text" />
        </label>
      </div>
      <div>
        <div>
          <h3>Ingredients</h3>
          {/* Create inputs from the ingredients array, initially this 
        will have 1 element with both properties empty */}
          {ingredients.map((ingredient, index) => {
            return (
              <div key={index}>
                <input
                  placeholder="Name"
                  value={ingredient.name}
                  // This handles updating current ingredient
                  onChange={(e) => {
                    // Get the current ingredient array
                    const newIngredients = [...ingredients];
                    //   Change the name property of the element at the current index to the input value
                    newIngredients[index].name = e.target.value;
                    //   update the ingredient array
                    setIngredients(newIngredients);
                    //   Check Working
                    console.log(ingredients);
                  }}
                />
                {/* Same Logic here */}
                <input
                  placeholder="Amount"
                  value={ingredient.amount}
                  onChange={(e) => {
                    const newIngredients = [...ingredients];
                    newIngredients[index].amount = e.target.value;
                    setIngredients(newIngredients);
                    console.log(ingredients);
                  }}
                />
              </div>
            );
          })}
          {/* Move to the next ingredient in the array */}
          <button onClick={nextIngredient}>Add Ingredient</button>
        </div>
        <h3>Instructions</h3>
        <div>
          {/* Instructions are similar however only one field is needed and
          the step will be auto incremented */}
          {instructions.map((instruction, index) => {
            return (
              <div key={index}>
                <input
                  value={instruction.step}
                  placeholder="Enter Instruction"
                  type="text"
                  onChange={(e) => {
                    const newInstructions = [...instructions];
                    newInstructions[index].step = e.target.value;
                    setInstructions(newInstructions);
                    console.log(instructions);
                  }}
                />
              </div>
            );
          })}
          <button onClick={nextInstruction}>Add Instruction</button>
        </div>
        <button onClick={submitRecipe}>Create Recipe</button>
      </div>
    </>
  );
}

export default CreateRecipe;
