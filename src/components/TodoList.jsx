import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList({ todos, handleDeleteTodo, handleEditTodo, handleToggleComplete }) {
return (
<ul className='main'>
{todos.map((todo, index) => (
<TodoCard
key={index}
index={index}
todo={todo}
handleDeleteTodo={handleDeleteTodo}
handleEditTodo={handleEditTodo}
handleToggleComplete={handleToggleComplete}
/>
))}
</ul>
);
}
