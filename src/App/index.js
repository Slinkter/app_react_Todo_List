import "./App.css";
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../components/TodoContext";

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
  
  const localStorageTodos = localStorage.getItem("TODOS_V1");

  let arrayDefaultParsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]))
    arrayDefaultParsedTodos = []
  } else {
    arrayDefaultParsedTodos = JSON.parse(localStorageTodos);

  }

  const [stateTodos, setStateTodos] = React.useState(arrayDefaultParsedTodos);
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

  //LOCALSTORAGE
  const saveTodos = (newTodos) =>{
    const stringifyTodos = JSON.stringify(newTodos)
    localStorage.setItem('TODOS_V1',stringifyTodos)
    setStateTodos(newTodos)
  }



  //metodo , cambiar de false a true
  const onUpdateItem = (text) => {
    const index = stateTodos.findIndex((item) => item.text === text); // si coincide el text ,coger index , sale un numero
    const newTodos = [...stateTodos]; // copy array
    newTodos[index].completed = true; //cambiar a true
    saveTodos(newTodos);
   
  };

  const onDeleteItem = (text) => {
    const index = stateTodos.findIndex((item) => item.text === text); // si coincide el text ,coger
    const newTodos = [...stateTodos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
