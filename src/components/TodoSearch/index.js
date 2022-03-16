import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { stateSearch, setStateSearch } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setStateSearch(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="ingresar un valor"
      value={stateSearch}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
