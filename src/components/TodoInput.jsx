import React from 'react';

export default function TodoInput({ handleAddTodo, todoValue, setTodoValue }) {
return (
<header>
<input 
value={todoValue} 
onChange={(e) => setTodoValue(e.target.value)} 
placeholder='Enter todo...' 
className="form__field"
/>
<button className="btn btn--primary" onClick={() => {
handleAddTodo(todoValue);
setTodoValue('');
}}>
Add
</button>
</header>
);
}
