# Updated for PE03

Check pe03 folder for updates. For the styling I used bootstrap and font awesome. These were installed via npm.

## To Do List APP

This app uses React functional components to display a list of tasks to be completed. Tasks can be added to the list. Tasks can be marked as completed by clicking the green checkmark or cancelled by clicking the red x. The list of tasks can also be sorted by their status.

### Input:

- List of Tasks: A list of movies was hardcoded into the `App` component for testing.
- Status for Filteing: These statuses are currently hardcoded into the `NavFilter` component but could easily be modified in the future to dynamically generate based on the unique statuses in the list.

### Processing:

- Complete Task: The `completeTask` function takes in an id and updates the `taskList` by mapping over the list, finding a matching `task.id` and updating the `task.status` value. The `list` is then updated using the `setList` function.

- Cancel Task: The `cancelTask` function takes in an id and updates the `taskList` by mapping over the list, finding a matching `task.id` and updating the `task.status` value. The `list` is then updated using the `setList` function.

- Add Task: The `addTask` function takes the user input from the `AddBar` component and adds a new task to the `taskList`. The `list` is then updated using the `setList` function.

- Filter Tasks: The filtering of tasks is accomplished via an `Effect` on the `filter` variable. When the `filter` variable is updated the `useEffect` function is called. This function filters the `taskList` based on the `filter` value. This triggers a re-render of the `TaskTable` component. This also sets the active filter button in the `NavFilter` component.

### Output:

- To Do List: Each tasks is displayed using an html table in the `TaskTable` component. The `list` is passed to the `TaskTable` component as a prop. The `TaskTable` component uses the map function to render a `TaskTableRow` component for each task in the list.

- Selected Filter: The `NavFilter` component displays a list of buttons that can be used to filter the `taskList`. The `filter` variable is passed to the `NavFilter` component as a prop. This is then used to determine which button is active.
