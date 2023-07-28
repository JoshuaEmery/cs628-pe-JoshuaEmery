import TaskTableRow from "./TaskTableRow";
//Component that sets up the taple
//takes in the list as well as a complete and canceltask functions
//these functions are passed down to the TaskTableRow component with the item from the list
function TaskTable({ list, completeTask, cancelTask }) {
  return (
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
            return TaskTableRow(item, completeTask, cancelTask);
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
