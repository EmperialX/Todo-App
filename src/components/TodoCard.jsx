import React from 'react';

export default function TodoCard({ todo, index, handleDeleteTodo, handleEditTodo, handleToggleComplete }) {
return (
<li className={`todoItem ${todo.completed ? 'completed' : ''}`} key={index}>
<p>{todo.text}</p>
<div className='actionsContainer'>
<button onClick={() => handleEditTodo(index)}>
    <i className="fa-solid fa-pen-to-square"></i>
</button>
<button onClick={() => handleDeleteTodo(index)}>
    <i className="fa-regular fa-trash-can"></i>
</button>
<button onClick={() => handleToggleComplete(index)}>
    {todo.completed ? 'Undo' : 'Complete'}
</button>
</div>
</li>
);
}
