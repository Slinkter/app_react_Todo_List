import "./App.css";
import React from "react";
import { AppUI } from "./AppUI";

// data externa

const defaultTODOs = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar clases de ingles", completed: false },
  { text: "llorara con al llorona", completed: false },
  { text: "Curso Fisica", completed: false },
  { text: "Curso Node", completed: true },
];

// importacion de components

function App() {
  const [stateTodos, setStateTodos] = React.useState(defaultTODOs);
  const [stateSearch, setStateSearch] = React.useState("");

  const count_TotalTodos = stateTodos.length;
  const count_CompletedTodos = stateTodos.filter(
    (item) => !!item.completed
  ).length;

  let searchedTodos = [];

  if (!stateSearch.length >= 1) {
    searchedTodos = stateTodos;
  } else {
    searchedTodos = stateTodos.filter((item) => {
      const todoText = item.text.toLowerCase();
      const searchText = stateSearch.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //metodo , cambiar de false a true
  const onUpdateItem = (text) => {
    const index = stateTodos.findIndex((item) => item.text === text); // si coincide el text ,coger index , sale un numero
    const newTodos = [...stateTodos]; // copy array
    newTodos[index].completed = true; //cambiar a true
    setStateTodos(newTodos);
    console.log(index);
    console.log(newTodos);
  };

  const onDeleteItem = (text) => {
    const index = stateTodos.findIndex((item) => item.text === text); // si coincide el text ,coger
    const newTodos = [...stateTodos];
    newTodos.splice(index, 1);
    setStateTodos(newTodos);
  };

  return (
    <AppUI
      count_TotalTodos={count_TotalTodos}
      count_CompletedTodos={count_CompletedTodos}
      stateSearch={stateSearch}
      setStateSearch={setStateSearch}
      searchedTodos={searchedTodos}
      onUpdateItem={onUpdateItem}
      onDeleteItem={onDeleteItem}
    />
  );
}

export default App;