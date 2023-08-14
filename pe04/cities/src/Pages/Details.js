import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CitiesContext } from "../App";
function Details() {
  const { citiesList } = useContext(CitiesContext);
  const { id } = useParams();
  const city = citiesList.find((city) => city.id === Number(id));
  return (
    <>
      <div className="card">
        <h2>{city.name}</h2>
        <p>Country: {city.country}</p>
        <p>Population: {city.population}</p>
      </div>
    </>
  );
}

export default Details;
