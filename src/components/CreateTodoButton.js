import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const onClickButton = () => {
    console.log("se hizo un click");
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
