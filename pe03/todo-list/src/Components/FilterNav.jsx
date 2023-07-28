//Nav Component
//This could probably be broken up into another component
//The button that is currently filtered will appear filled in
function FilterNav({ filter, setFilter }) {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <button
          onClick={() => setFilter("Active")}
          className={
            "btn btn-outline-primary" + (filter === "Active" ? " active" : "")
          }
        >
          Active
        </button>
      </li>
      <li className="nav-item">
        <button
          onClick={() => setFilter("Completed")}
          className={
            "btn btn-outline-success" +
            (filter === "Completed" ? " active" : "")
          }
        >
          Completed
        </button>
      </li>
      <li className="nav-item">
        <button
          onClick={() => setFilter("Cancelled")}
          className={
            "btn btn-outline-danger" + (filter === "Cancelled" ? " active" : "")
          }
        >
          Cancelled
        </button>
      </li>
      <li className="nav-item">
        <button
          onClick={() => setFilter("")}
          className={
            "btn btn-outline-secondary" + (filter === "" ? " active" : "")
          }
        >
          All
        </button>
      </li>
    </ul>
  );
}

export default FilterNav;
