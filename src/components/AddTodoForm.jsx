import React, { useRef } from 'react';
import useStore from '../zustand/store';

const AddTodoForm = () => {
  const inputRef = useRef();
  const addTodos = useStore((state) => state.addTodo);
  const addTodo = () => {
    addTodos(inputRef.current.value);
    inputRef.current.value = '';
  };
  
  return (
    <div>
      <h1>Todo List</h1>
      <p>Add a New Todo</p>
      <form>
        <input type="text" placeholder='Enter Todo' ref={inputRef} />
        <br />
        <button type='submit' onClick={addTodo}>Add It!</button>
      </form>
    </div>
  )
}

export default AddTodoForm
