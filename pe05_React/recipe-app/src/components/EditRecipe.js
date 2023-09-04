import { useEffect, useState } from "react";
import { getRecipeById, updateRecipe } from "../data/repository";
function EditRecipe(props) {
  const [selectedRecipe, setSelectedRecipe] = useState("");

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  useEffect(() => {
    //declaring an async function inside useEffect
    async function fetchRecipe() {
      try {
        const fetchedRecipe = await getRecipeById(props.id);
        setSelectedRecipe(fetchedRecipe);
        setTitle(fetchedRecipe.title);
        setIngredients(fetchedRecipe.ingredients);
        setInstructions(fetchedRecipe.instructions);
      } catch (error) {
        console.log(error);
      }
    }
    //calling the async function
    fetchRecipe();
  }, []);

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
    const recipe = {
      title,
      ingredients,
      instructions,
    };

    console.log(recipe);
    updateRecipe(recipe);
  };
  return (
    <div>
      <h1>Edit Recipe</h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <h3>Ingredients</h3>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              placeholder="Name"
              value={ingredient.name}
              onChange={(e) => {
                const newIngredients = [...ingredients];
                newIngredients[index].name = e.target.value;
                setIngredients(newIngredients);
              }}
            />
            <input
              placeholder="Amount"
              value={ingredient.amount}
              onChange={(e) => {
                const newIngredients = [...ingredients];
                newIngredients[index].amount = e.target.value;
                setIngredients(newIngredients);
              }}
            />
          </div>
        ))}
        <button onClick={nextIngredient}>Add Ingredient</button>
      </div>
      <div>
        <h3>Instructions</h3>
        {instructions.map((instruction, index) => (
          <div key={index}>
            <input
              placeholder="Step"
              value={instruction.step}
              onChange={(e) => {
                const newInstructions = [...instructions];
                newInstructions[index].step = e.target.value;
                setInstructions(newInstructions);
              }}
            />
          </div>
        ))}
        <button onClick={nextInstruction}>Add Instruction</button>
      </div>
      <button onClick={submitRecipe}>Update Recipe</button>
    </div>
  );
}

export default EditRecipe;
