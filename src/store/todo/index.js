import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.isCompleted = !todo.isCompleted;
    },
  },
});

export const getTodos = (state) => state.todo.todos;

export const getTodoById = (state, id) => state.todo.todos.find((todo) => todo.id === id);

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
