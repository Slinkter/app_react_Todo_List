import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: stateTodos,
    saveItem,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  console.log(stateTodos);

  const [openModel, setOpenModal] = React.useState(false);

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

  //metodo , cambiar de false a true saveItem

  const addTodo = (text) => {
    const newTodos = [...stateTodos]; // copy array
    newTodos.push({
      competed:false,
      text ,
    })  //cambiar a true
    saveItem(newTodos);
  };



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
    <TodoContext.Provider
      value={{
        loading,
        error,
        count_TotalTodos,
        count_CompletedTodos,
        stateSearch,
        setStateSearch,
        searchedTodos,
        addTodo,
        onUpdateItem,
        onDeleteItem,
        openModel,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
