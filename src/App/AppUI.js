import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";

function AppUI({
  error,
  loading,
  count_TotalTodos,
  count_CompletedTodos,
  stateSearch,
  setStateSearch,
  searchedTodos,
  onUpdateItem,
  onDeleteItem,
}) {
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
          {error && <p> Hubo un error</p>}
          {loading && <p> Estamos cargando</p>}
          {(!loading && !searchedTodos.lenght) && <p>Crear tu primer TODO</p>}

          {searchedTodos.map((item) => (
            <TodoItem
              key={item.text}
              text={item.text}
              completed={item.completed}
              onUpdateItem={() => onUpdateItem(item.text)}
              onDeleteItem={() => onDeleteItem(item.text)}
            />
          ))}
        </TodoList>
      }
      {<CreateTodoButton />}
    </React.Fragment>
  );
}

export { AppUI };
