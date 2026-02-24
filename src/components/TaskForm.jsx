import React, { useState, useContext, useId } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const { addTask } = useContext(TaskContext);
  const inputId = useId(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={inputId}>New Task:</label>
      <input
        id={inputId}
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;