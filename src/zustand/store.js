import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

let todoStore = (set) => ({
    todos: [],
    fetch: async () => {
        try {
            const res = await axios.get("http://localhost:7000/todos");
            set((state) => ({ todos: (state.todos = res.data) }))
        } catch (err) {
            console.log(err)
        };
    },
    addTodo: (todo) =>{
        const newKey = uuidv4();
        set((state) => ({
            todos: [
                ...state.todos,
                {
                    id: newKey,
                    text: todo,
                    completed: false,
                }
            ]
        }))},
    deleteTodo: (id) => 
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
    completeTodo: (id) => 
        set((state) => ({
            todos: state.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        }))
})

todoStore = persist(todoStore, {name : "TodoList", storage: createJSONStorage(() => sessionStorage)});
todoStore = devtools(todoStore);

const useStore = create(todoStore);

if (process.env.NODE_ENV!== "production") {
    mountStoreDevtool('Store', useStore);
}

export default useStore ;