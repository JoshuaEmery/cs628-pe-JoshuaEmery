import { useContext } from "react";
import { CitiesContext } from "../App";
import { Link } from "react-router-dom";

function List() {
  const { citiesList } = useContext(CitiesContext);
  return (
    <>
      <h2>Cities List</h2>
      {citiesList.map((city) => {
        return (
          <div>
            <Link to={`/cities/${city.id}`}>{city.name}</Link>
          </div>
        );
      })}
    </>
  );
}

export default List;
