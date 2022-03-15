import "./App.css";
import React from "react";
import { AppUI } from "./AppUI";

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

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        //
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {       
        setError(error);
      }
    }, 2000);
  }, []);

  //LOCALSTORAGE
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading,error };
}

function App() {
  const {
    item: stateTodos,
    saveItem: saveItem,
    loading,
    error
  } = useLocalStorage("TODOS_V1", []);
  console.log(stateTodos);

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
    saveItem(newTodos);
  };

  const onDeleteItem = (text) => {
    const index = stateTodos.findIndex((item) => item.text === text); // si coincide el text ,coger
    const newTodos = [...stateTodos];
    newTodos.splice(index, 1);
    saveItem(newTodos);
  };

  //===============================>

  return (
    <AppUI
      loading={loading}
      error={error}
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
