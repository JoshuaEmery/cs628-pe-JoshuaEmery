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
  //the list needs to be tracked by state
  const [list, setList] = useState(todoList);
  //The description typed in by the user is also tracked by state
  const [newItemDescription, setNewItemDescription] = useState("");
  //This is used to filter the to do list by status
  const [filter, setFilter] = useState("");
  //When the filter changes updated the list based on the filter
  useEffect(() => {
    //Testing
    console.log(`filter changed to ${filter}`);
    //Empty filter reset the list
    if (filter === "") {
      setList(todoList);
    } else {
      //fliter the list based on the filter
      setList(todoList.filter((item) => item.status === filter));
    }
  }, [filter]);
  //fnunction that addds a new item to the list
  //This is only passed to one child so I did not use useCallback
  function addToList() {
    setList((currentList) => {
      //if the description is empty do not add to the list
      if (newItemDescription === "") return currentList;
      const id = currentList.length + 1;
      const description = newItemDescription;
      const status = "Active";
      //I am not sure if this is the best way to get the current dat
      //Using current date for testing
      const created = new Date().toISOString().slice(0, 10);
      const duedate = new Date().toISOString().slice(0, 10);
      const newItem = { id, description, status, created, duedate };
      //return a new list with everything copied from the current list and the new item
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
      //ok this is a serious arrow function crocodile
      //setList taking a callback function with the currentList as a parameter
      setList((currentList) => {
        //we are going to return a new list using the map function to access the items in the list
        return currentList.map((item) => {
          //inside of this arrow function I have access to the items
          if (item.id === id) {
            item.status = "Cancelled";
          }
          //return the item to the map function
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
