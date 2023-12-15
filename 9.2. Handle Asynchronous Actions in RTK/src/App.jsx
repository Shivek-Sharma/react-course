import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from './features/todo/todoSlice'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.todo)

  if (state.isLoading) {
    return <h2>Loading...</h2>
  }

  if (state.isError) {
    return <h2>Something went wrong!!</h2>
  }

  return (
    <>
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>

      {state.data?.length > 0 ? (
        <div>
          {
            state.data.map((todo) => (
              <p key={todo.id}>{todo.title}</p>
            ))
          }
        </div>
      ) : state.data && (
        <h2>No data to display!!</h2>
      )}
    </>
  )
}

export default App
