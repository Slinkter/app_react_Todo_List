import "./App.css";
import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

// data externa

const TODOs = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar clases de ingles", completed: false },
  { text: "llorara con al llorona", completed: false },
];

// importacion de components

function App() {
  return (
    <React.Fragment>
      {<TodoCounter />}
      {<TodoSearch />}
      {
        <TodoList>
          {TODOs.map((item) => (
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
