import './App.css'
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className="App">
      <AddTodoForm />
      <TodoList />
    </div>
  )
}

export default App