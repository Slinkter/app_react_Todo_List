import "./App.css";
import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

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

  if (stateSearch.length >= 1) {
    searchedTodos = stateTodos.filter((item) => {
      const todoText = item.text.toLowerCase();
      const searchText = stateSearch.toLowerCase();
      return todoText.includes(searchText);
    });
  } else {
    searchedTodos = stateTodos;
  }

  return (
    <React.Fragment>
      {
        <TodoCounter
          total={count_TotalTodos}
          completed={count_CompletedTodos}
        />
      }
      {<TodoSearch stateSearch={stateSearch} setStateSearch={setStateSearch} />}
      {
        <TodoList>
          {searchedTodos.map((item) => (
            <TodoItem
              key={item.text}
              text={item.text}
              completed={item.completed}
            />
          ))}
        </TodoList>
      }
      {<CreateTodoButton />}
    </React.Fragment>
  );
}

export default App;
