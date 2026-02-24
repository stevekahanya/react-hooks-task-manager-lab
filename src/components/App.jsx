import React from "react";
import TaskForm from "./components/TaskForm";
import SearchBar from "./components/SearchBar";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm />
      <SearchBar />
      <TaskList />
    </div>
  );
}

export default App;