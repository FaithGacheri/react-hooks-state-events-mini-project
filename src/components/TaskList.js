import React from "react";
import Task from "./Task"

function TaskList({tasks, removeItem}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index)=>(
        <Task 
         removeItem={removeItem}
          key={index} 
          text={task.text}
          category={task.category}
         />
      ))}
    </div>
  );
}

export default TaskList;
