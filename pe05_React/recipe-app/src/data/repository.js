async function getAllRecipes() {
  const response = await fetch("http://127.0.0.1:8000/api/recipes");
  if (!response.ok) throw new Error("Something went wrong");
  return await response.json();
}

async function getRecipeById(id) {
  const response = await fetch("http://127.0.0.1:8000/api/recipes/" + id);
  if (!response.ok) throw new Error("Something went wrong");
  return await response.json();
}

//Create recipe
async function createRecipe(recipe) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipe),
  };
  console.log(recipe);
  console.log(requestOptions);
  const response = await fetch(
    "http://127.0.0.1:8000/api/recipes",
    requestOptions
  );

  if (!response.ok) throw new Error("Failed to create recipe");

  return await response.json();
}

//Update very similar to create
async function updateRecipe(updatedRecipe) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedRecipe),
  };

  console.log(updatedRecipe);
  console.log(requestOptions);

  const response = await fetch(
    `http://127.0.0.1:8000/api/recipes/${updateRecipe.id}`,
    requestOptions
  );

  if (!response.ok) throw new Error("Failed to update recipe");

  return await response.json();
}

export { getAllRecipes, createRecipe, getRecipeById, updateRecipe };
