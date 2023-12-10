// ToDo App using Redux Toolkit

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { TodoForm, TodoItems } from './components'

function App() {
  const todos = useSelector((state) => state.todos)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
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
  )
}

export default App