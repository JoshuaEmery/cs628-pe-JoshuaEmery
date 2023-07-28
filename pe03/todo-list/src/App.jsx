import { useCallback, useEffect, useState } from "react";
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
  //because cancelTask is being passed to multiple child components I think it is
  //better to useCallback? I am not totally sure
  // function cancelTask(id) {
  //   setList((currentList) => {
  //     return currentList.map((item) => {
  //       if (item.id === id) {
  //         item.status = "Cancelled";
  //         setFilter("Cancelled");
  //       }
  //       return item;
  //     });
  //   });
  // }
  //Ok I barely understand this but here goes:
  //useCallback ensures that when a child component is re-rendered due to a change that
  //mutiple instances of the same function are not added? I am thinking this saves on memory?
  //Is this correct?
  const cancelTask = useCallback(
    (id) => {
      setList((currentList) => {
        return currentList.map((item) => {
          if (item.id === id) {
            item.status = "Cancelled";
          }
          return item;
        });
      });
    },
    [setList]
  );
  //same comment as above
  // function completeTask(id) {
  //   setList((currentList) => {
  //     return currentList.map((item) => {
  //       if (item.id === id) {
  //         item.status = "Completed";
  //         setFilter("Completed");
  //       }
  //       return item;
  //     });
  //   });
  // }
  const completeTask = useCallback(
    (id) => {
      setList((currentList) => {
        return currentList.map((item) => {
          if (item.id === id) {
            item.status = "Completed";
          }
          return item;
        });
      });
    },
    [setList]
  );

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
