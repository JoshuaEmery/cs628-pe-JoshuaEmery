import { useEffect } from "react";
import RecipeItem from "./RecipeItem";
import { useState } from "react";
import { getAllRecipes } from "../data/repository";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    //declaring an async function inside useEffect
    async function fetchRecipes() {
      try {
        const fetchedRecipes = await getAllRecipes();
        setRecipes(fetchedRecipes);
      } catch (error) {
        console.log(error);
      }
    }
    //calling the async function
    fetchRecipes();
  }, []);
  return (
    <>
      <h2>RecipeList</h2>
      {recipes.map((recipe) => {
        return <RecipeItem recipe={recipe}></RecipeItem>;
      })}
    </>
  );
}

export default RecipeList;
