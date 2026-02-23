import React, { useRef, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function SearchBar() {
  const searchInputRef = useRef();
  const { setSearchQuery } = useContext(TaskContext);

  function handleSearch() {
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