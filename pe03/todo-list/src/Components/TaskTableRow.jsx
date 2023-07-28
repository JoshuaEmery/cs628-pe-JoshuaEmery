import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function TaskTableRow(item, completeTask, cancelTask) {
  return (
    <tr>
      <td>{item.description}</td>
      <td>{item.created}</td>
      <td>{item.duedate}</td>
      <td>{item.status}</td>
      <td>
        <button
          onClick={() => completeTask(item.id)}
          className="btn btn-outline-success"
        >
          <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
        </button>
        <button
          onClick={() => cancelTask(item.id)}
          className="btn btn-outline-danger"
        >
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </button>
      </td>
    </tr>
  );
}

export default TaskTableRow;
