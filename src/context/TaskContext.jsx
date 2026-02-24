import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Initial load
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  const addTask = async (title) => {
    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed: false }),
    });
    const newTask = await res.json();
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleComplete = async (id, currentStatus) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !currentStatus }),
    });
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !currentStatus } : t))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleComplete, searchQuery, setSearchQuery }}>
      {children}
    </TaskContext.Provider>
  );
};