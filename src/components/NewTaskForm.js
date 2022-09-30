import React ,{useState} from "react";

function NewTaskForm({onTaskFormSubmit,categories}) {
  const [newItemFields, setNewItemFields]=useState({
    text:'',
    category:'Code'
  })

  let filteredList = categories
  .filter((category) => {
    return category !== 'All'
  })
  .map((category) => {
    return (
      <option value={category} key={category}>
        {category}
      </option>
    )
  })

return (
  <form
    className='new-task-form'
    onSubmit={(e) => {
      e.preventDefault()
      onTaskFormSubmit(newItemFields)
      setNewItemFields({ text: '', category: 'code' })
    }}
  >
    <label>
      Details
      <input
        type='text'
        name='text'
        value={newItemFields.text}
        onChange={(e) =>
          setNewItemFields((prevState) => ({ ...prevState, text: e.target.value }))
        }
      />
    </label>
    <label>
      Category
      <select
        name='category'
        onChange={(e) =>
          setNewItemFields((prevState) => ({ ...prevState, category: e.target.value }))
        }
      >
        {/* render <option> elements for each category here */}
        {filteredList}
      </select>
    </label>
    <input type='submit' value='Add task' />
  </form>
)
}

export default NewTaskForm