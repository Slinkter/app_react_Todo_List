import React from "react";
import "./TodoSearch.css";

function TodoSearch({stateSearch, setStateSearch}) {

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
