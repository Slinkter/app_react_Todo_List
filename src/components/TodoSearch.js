import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [state, setState] = React.useState("");

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setState(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="ingresar un valor"
      value={state}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
