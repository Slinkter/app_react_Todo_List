import React from "react";
import './TodoCounter.css'

function TodoCounter({total,completed}) {
  return <h2 className="TodoCounterh2"> Has compleado {completed}  de {total}  TODOs </h2>;
}

export { TodoCounter };
