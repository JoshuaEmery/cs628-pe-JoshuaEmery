import { library } from "@fortawesome/fontawesome-svg-core";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AddBar from "./Components/AddBar";
import FilterNav from "./Components/FilterNav";
import TaskTable from "./Components/TaskTable";

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
  function cancelTask(id) {
    setList((currentList) => {
      return currentList.map((item) => {
        if (item.id === id) {
          item.status = "Cancelled";
          setFilter("Cancelled");
        }
        return item;
      });
    });
  }
  function completeTask(id) {
    setList((currentList) => {
      return currentList.map((item) => {
        if (item.id === id) {
          item.status = "Completed";
          setFilter("Completed");
        }
        return item;
      });
    });
  }

  return (
    <div className="container">
      <div className="row">
        <h2>To do list</h2>
      </div>
      <AddBar
        setNewItemDescription={setNewItemDescription}
        addToList={addToList}
      ></AddBar>
      <FilterNav filter={filter} setFilter={setFilter}></FilterNav>
      <TaskTable
        list={list}
        cancelTask={cancelTask}
        completeTask={completeTask}
      ></TaskTable>
    </div>
  );
}

export default App;
