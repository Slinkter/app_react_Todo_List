import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";

function AppUI() {
  const { error, loading, searchedTodos, onUpdateItem, onDeleteItem } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      {<TodoCounter />}
      {<TodoSearch />}
      <TodoList>
        {error && <p> Hubo un error</p>}
        {loading && <p> Estamos cargando</p>}
        {!loading && !searchedTodos.lenght && <p>Crear tu primer TODO</p>}

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
      {<CreateTodoButton />}
    </React.Fragment>
  );
}

export { AppUI };
