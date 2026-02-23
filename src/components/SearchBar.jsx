import React, { useRef, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function SearchBar() {
  const searchInputRef = useRef();
  const { setSearchQuery } = useContext(TaskContext);

  function handleSearch() {
    // Access the raw DOM value via the ref and update global state
    setSearchQuery(searchInputRef.current.value);
  }

  return (
    <div>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search tasks..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;