import React , {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState('')

  function removeItem(newItem) {
    const updatedTasks = tasks.filter((task) => task.text !== newItem)
    setTasks(updatedTasks)
  }

  function onTaskFormSubmit(data) {
    setTasks((prevState) => [...prevState, data])
  }

  function myFilteredList(data) {
    setTasks(data)
  }


	
  return (
    <div className='App'>
      <h2>My tasks</h2>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        tasks={tasks}
        myFilteredList={myFilteredList}
      />
      <NewTaskForm
        categories={categories}
        tasks={tasks}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={tasks} removeItem={removeItem} />
    </div>
  )
}

export default App;
