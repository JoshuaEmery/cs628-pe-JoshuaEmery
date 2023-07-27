import { library } from "@fortawesome/fontawesome-svg-core";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const todoList = [
  {
    id: 1,
    description: "Buy groceries",
    status: "Active",
    created: "2023-07-27",
    duedate: "2023-07-31",
  },
  {
    id: 2,
    description: "Finish project report",
    status: "Active",
    created: "2023-07-27",
    duedate: "2023-08-10",
  },
  {
    id: 3,
    description: "Call mom",
    status: "Completed",
    created: "2023-07-26",
    duedate: "2023-08-01",
  },
  {
    id: 4,
    description: "Go for a jog",
    status: "Cancelled",
    created: "2023-07-25",
    duedate: "2023-07-29",
  },
  {
    id: 5,
    description: "Read a book",
    status: "Active",
    created: "2023-07-26",
    duedate: "2023-08-05",
  },
  {
    id: 6,
    description: "Attend meeting",
    status: "Active",
    created: "2023-07-24",
    duedate: "2023-07-30",
  },
  {
    id: 7,
    description: "Pay bills",
    status: "Completed",
    created: "2023-07-23",
    duedate: "2023-07-28",
  },
  {
    id: 8,
    description: "Buy a gift",
    status: "Active",
    created: "2023-07-22",
    duedate: "2023-08-03",
  },
  {
    id: 9,
    description: "Clean the house",
    status: "Active",
    created: "2023-07-21",
    duedate: "2023-07-31",
  },
  {
    id: 10,
    description: "Prepare presentation",
    status: "Cancelled",
    created: "2023-07-20",
    duedate: "2023-07-30",
  },
];

function App() {
  const [list, setList] = useState(todoList);
  const [newItemDescription, setNewItemDescription] = useState("");
  const [filter, setFilter] = useState("");
  useEffect(() => {
    console.log(`filter changed to ${filter}`);
    if (filter === "") {
      setList(todoList);
    } else {
      setList(todoList.filter((item) => item.status === filter));
    }
  }, [filter]);
  function addToList() {
    setList((currentList) => {
      if (newItemDescription === "") return currentList;
      const id = currentList.length + 1;
      const description = newItemDescription;
      const status = "Active";
      const created = new Date().toISOString().slice(0, 10);
      const duedate = new Date().toISOString().slice(0, 10);
      const newItem = { id, description, status, created, duedate };
      return [...currentList, newItem];
    });
  }
  return (
    <div className="container">
      <div className="row">
        <h2>To do list</h2>
      </div>
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
      <div className="row">
        <h3>Tasks</h3>
      </div>
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
              "btn btn-outline-danger" +
              (filter === "Cancelled" ? " active" : "")
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
      <div className="row">
        <table className="table table-hover">
          <tr>
            <th>Task</th>
            <th>Created</th>
            <th>Due</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

          <tbody>
            {list.map((item) => {
              return (
                <tr>
                  <td>{item.description}</td>
                  <td>{item.created}</td>
                  <td>{item.duedate}</td>
                  <td>{item.status}</td>
                  <td>
                    <button className="btn btn-outline-success">
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </button>
                    <button className="btn btn-outline-danger">
                      <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
