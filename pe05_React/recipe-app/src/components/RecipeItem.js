function RecipeItem(props) {
  return (
    <>
      <h2>Recipe Item</h2>
      <p>{props.recipe.title}</p>
      <ul>
        {props.recipe.ingredients.map((i) => {
          return (
            <li>
              {i.name}: {i.amount}
            </li>
          );
        })}
      </ul>
      <ul>
        {props.recipe.instructions.map((i) => {
          return (
            <li>
              {i.stepNumber}. {i.step}
            </li>
          );
        })}
      </ul>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </>
  );
}

export default RecipeItem;
