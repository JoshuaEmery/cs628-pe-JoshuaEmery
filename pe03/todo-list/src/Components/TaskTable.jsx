import TaskTableRow from "./TaskTableRow";

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
