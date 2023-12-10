import { createSlice, nanoid } from '@reduxjs/toolkit'

const fetchTodos = JSON.parse(localStorage.getItem("todos"))

const initialState = {
  todos: fetchTodos || []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload,
        completed: false
      }

      state.todos.push(newTodo)
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, title: action.payload.todoMsg } : todo)
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },

    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
    }
  }
})

export const { addTodo, updateTodo, removeTodo, toggleComplete } = todoSlice.actions

export default todoSlice.reducer