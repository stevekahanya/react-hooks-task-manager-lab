import { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch initial tasks from db.json
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  // Add Task Logic
  const addTask = async (title) => {
    const newTask = { title, completed: false };
    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
    const savedTask = await res.json();
    setTasks([...tasks, savedTask]);
  };

  // Toggle Complete Logic
  const toggleComplete = async (id, currentStatus) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !currentStatus }),
    });
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !currentStatus } : t));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleComplete, searchQuery, setSearchQuery }}>
      {children}
    </TaskContext.Provider>
  );
};