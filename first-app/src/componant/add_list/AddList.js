import React, { useState } from "react";

const AddList = () => {
  const [todos, setTodos] = useState(["sample todo"]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (!newTodo.trim()) return;

    setTodos([...todos, newTodo.trim()]);
    setNewTodo("");
  };

  const handleDeleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h2>Add a New Todo</h2>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTodo}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={!newTodo.trim()}>
          Add Task
        </button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <button
              type="button"
              onClick={() => handleDeleteTodo(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddList;
