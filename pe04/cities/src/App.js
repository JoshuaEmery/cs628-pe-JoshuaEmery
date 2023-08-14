import logo from "./logo.svg";
import "./App.css";
import { useState, createContext, useContext } from "react";
import { Route, Router, Link, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import List from "./Pages/List";
import Create from "./Pages/Create";
const cities = [
  { id: 1, name: "New York", country: "USA", population: 8175133 },
  { id: 2, name: "Los Angeles", country: "USA", population: 3792621 },
  { id: 3, name: "London", country: "UK", population: 8787892 },
  { id: 4, name: "Tokyo", country: "Japan", population: 13751518 },
  { id: 5, name: "Shanghai", country: "China", population: 23019148 },
  { id: 6, name: "Mumbai", country: "India", population: 12442373 },
  { id: 7, name: "Sydney", country: "Australia", population: 4627345 },
  { id: 8, name: "Cairo", country: "Egypt", population: 9500000 },
  { id: 9, name: "Sao Paulo", country: "Brazil", population: 12106920 },
  { id: 10, name: "Moscow", country: "Russia", population: 11920000 },
  {
    id: 11,
    name: "Johannesburg",
    country: "South Africa",
    population: 4434837,
  },
  { id: 12, name: "Paris", country: "France", population: 2148327 },
  { id: 13, name: "Toronto", country: "Canada", population: 2731571 },
  { id: 14, name: "Berlin", country: "Germany", population: 3644826 },
  { id: 15, name: "Rome", country: "Italy", population: 2870500 },
  { id: 16, name: "Dubai", country: "UAE", population: 3137000 },
  { id: 17, name: "Bangkok", country: "Thailand", population: 8281000 },
  { id: 18, name: "Mexico City", country: "Mexico", population: 8918653 },
  { id: 19, name: "Auckland", country: "New Zealand", population: 1515500 },
  { id: 20, name: "Seoul", country: "South Korea", population: 9733509 },
];
const CitiesContext = createContext();
function App() {
  const [citiesList, setCitiesList] = useState(cities);
  function createCity(city) {
    city.id = citiesList.length + 1;
    setCitiesList([...citiesList, city]);
  }
  return (
    <BrowserRouter>
      <Navigation></Navigation>

      <CitiesContext.Provider value={{ citiesList, createCity }}>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities/:id" element={<Details />} />
            <Route path="/cities/create" element={<Create />} />
            <Route path="/cities" element={<List />} />
          </Routes>
        </div>
      </CitiesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { CitiesContext };
