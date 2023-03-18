import React from 'react';
import useStore from '../zustand/store';

const TodoItem = ({ id, text, completed }) => {
    const deleteTodo = useStore((state) => state.deleteTodo);
    const completeTodo = useStore((state) => state.completeTodo);

    return (
        <li>
            <div>
                <input
                    className='todoItem'
                    type="checkbox"
                    checked={completed}
                    onChange={() => completeTodo(id)}
                />
                {text}
                <button onClick={() => deleteTodo(id)}>Delete</button>
            </div>
        </li>
    )
}

export default TodoItem
