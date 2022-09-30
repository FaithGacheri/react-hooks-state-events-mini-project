import React from "react";
import CategoryFilter from "./CategoryFilter";

function Task({text,category,removeItem}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=>removeItem(text)}  className="delete"></button>
    </div>
  );
}

export default Task;
