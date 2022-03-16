import "./App.css";
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

// data externa

/* const defaultTODOs = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar clases de ingles", completed: false },
  { text: "llorara con al llorona", completed: false },
  { text: "Curso Fisica", completed: false },
  { text: "Curso Node", completed: true },
]; */

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTODOs));

// importacion de components

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
