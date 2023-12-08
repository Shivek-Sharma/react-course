import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItems } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }

    setTodos((prev) => [newTodo, ...prev])
  }

  const updateTodo = (id, title) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, title } : todo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  useEffect(() => {
    const fetchTodos = JSON.parse(localStorage.getItem("todos"))

    if (fetchTodos?.length > 0)
      setTodos(fetchTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#2c4770] min-h-screen py-8">
        <div className="w-full bg-[#20385b] max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>

          <div className="mb-7">
            <TodoForm />
          </div>

          <div className="flex flex-wrap gap-y-3 mb-5">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItems todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
