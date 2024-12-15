import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  },
  {
    title: "Study DSA",
    description: "Study DSA from 9-10",
    completed: true
  }
]);

// for new todo
const [newTodo, setNewTodo] = useState({
  title: "",
  description: ""
})

// handle input change
function handleInputChange(e) {
  const {name, value} = e.target;
  setNewTodo((prevTodo) => ({
    ...prevTodo,
    [name]: value,
  }));
}

// add button logic
function addTodo() {
  if(newTodo.title && newTodo.description) {
    setTodos([...todos, newTodo]);
    setNewTodo({title: "", description: ""}) //clear i/p fields
  }
}

// remove button
function removeTodo(index) {
  setTodos(todos.filter((_, i) => i !== index));
}

  return (
    <>
      {/* Input fields */}
      <input
        type="text"
        name="title"
        placeholder="Enter title"
        value={newTodo.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Enter description"
        value={newTodo.description}
        onChange={handleInputChange}
      />

      {/* add btn */}
      <button onClick={addTodo}>Add todo</button>

      {/* list of todo */}
      {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            title={todo.title}
            description={todo.description}
            removeTodo={removeTodo}
          />
        ))}
    </>
  )
}

function Todo({ title, description, index, removeTodo }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  );
}

export default App