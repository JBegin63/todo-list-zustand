import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import useStore from '../zustand/store';

const TodoList = () => {
    const todos = useStore((state) => state.todos);
    const fetchTodos = useStore((state) => state.fetch);

    useEffect(() => {
        fetchTodos();
        console.log(todos);
    }, [])

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                />
            ))}
        </ul>
    )
}

export default TodoList
