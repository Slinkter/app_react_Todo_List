import logo from "./logo.svg";
import "./App.css";
import React from "react";

// data externa

const TODOs = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar clases de ingles", completed: false },
  { text: "llorara con al llorona", completed: false },
];

function App() {
  return (
    <React.Fragment>
      {/*<TodoCounter  /> */}
      <h2> Has compleado 2 de 3 TODOs </h2>
      {/* <TodoSearch /> */}
      <input placeholder="cebolla" />





      {/* <CreateTodoButton /> */}
      <button> + </button>
    </React.Fragment>
  );
}

export default App;
