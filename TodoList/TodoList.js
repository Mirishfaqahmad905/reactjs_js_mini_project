import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDelete = (item) => {
    const updatedData = todos.filter((i) => i !== item);
    setTodos(updatedData);
  };

  return (
    <>
      <h2>ToDo App</h2>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button onClick={handleTodo}>Add</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
