import React from "react";

const ToDo = ({ id, todo, completed, toggleCompleted }) => {
  return <li 
  onClick={() => toggleCompleted(id)}
  className={completed ? 'completed' : 'not-completed'}
  >
  {todo}
  </li>;
};

export default ToDo;
