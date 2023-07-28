import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function AddBar({ setNewItemDescription, addToList }) {
  return (
    <div className="row">
      <div className="input-group">
        <input
          placeholder="Enter a task"
          className="form-control"
          type="text"
          name=""
          id=""
          onChange={(event) => setNewItemDescription(event.target.value)}
        />
        <button onClick={addToList} className="btn btn-outline-primary">
          <FontAwesomeIcon icon={faSquarePlus}></FontAwesomeIcon> Add to list
        </button>
      </div>
    </div>
  );
}

export default AddBar;
