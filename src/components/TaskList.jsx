import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  // Pull global tasks and actions from context
  const { tasks, toggleComplete, searchQuery } = useContext(TaskContext);

  // Filter based on the searchQuery in context
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </span>
          <button 
            data-testid={task.id} 
            onClick={() => toggleComplete(task.id, task.completed)}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;