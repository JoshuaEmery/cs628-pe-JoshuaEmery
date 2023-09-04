import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import RecipeList from "./components/RecipeList";
import CreateRecipe from "./components/CreateRecipe";
import EditRecipe from "./components/EditRecipe";

function App() {
  return (
    <>
      <Nav />
      <EditRecipe id={"64f6346d360267de5cbc31e9"} />
      <RecipeList />
    </>
  );
}

export default App;
