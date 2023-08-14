import { useContext, useState } from "react";
import { CitiesContext } from "../App";
function Create() {
  const { createCity } = useContext(CitiesContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let newCity = {
      id: Date.now(), // Generating a new ID based on the timestamp
      name: formData.get("name"),
      country: formData.get("country"),
      population: formData.get("population"),
    };

    createCity(newCity);
    //redirecting to the cities list page
    e.target.reset(); // Resetting the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New City</h2>
      <div className="form-input">
        <label htmlFor="name">City Name</label>
        <input name="name" placeholder="City Name" />
      </div>

      <div className="form-input">
        <label htmlFor="country">Country</label>
        <input name="country" placeholder="Country" />
      </div>

      <div className="form-input">
        <label htmlFor="population">Population</label>
        <input name="population" placeholder="Population" />
      </div>
      <button type="submit">Add City</button>
    </form>
  );
}
export default Create;
