import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput'; // Ensure this path is correct
import TodoList from './components/TodoList'; // Ensure this path is correct

function App() {
const [todos, setTodos] = useState([]);
const [todoValue, setTodoValue] = useState('');

useEffect(() => {
const savedTodos = JSON.parse(localStorage.getItem('todos'));
if (savedTodos) {
setTodos(savedTodos);
}
}, []);

useEffect(() => {
localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

function handleAddTodo(newTodoText) {
const newTodo = { text: newTodoText, completed: false };
setTodos([...todos, newTodo]);
}

function handleDeleteTodo(index) {
const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
setTodos(newTodos);
}

function handleEditTodo(index) {
setTodoValue(todos[index].text);
handleDeleteTodo(index);
}

function handleToggleComplete(index) {
const newTodos = todos.map((todo, todoIndex) => (
todoIndex === index ? { ...todo, completed: !todo.completed } : todo
));
setTodos(newTodos);
}

return (
<>
<TodoInput 
todoValue={todoValue} 
setTodoValue={setTodoValue} 
handleAddTodo={handleAddTodo} 
/>
<TodoList 
todos={todos} 
handleDeleteTodo={handleDeleteTodo} 
handleEditTodo={handleEditTodo} 
handleToggleComplete={handleToggleComplete} 
/>
</>
);
}

export default App;
