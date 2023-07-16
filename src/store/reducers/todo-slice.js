import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo-slice",
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      if (payload.trim() !== "") {
        state.todos.push({
          id: Date.now(),
          completed: false,
          title: payload,
        });
      } else {
        console.warn("Cannot add an empty todo!");
      }
    },
    completeTodo(state, { payload }) {
      const toggledTodo = state.todos.find((todo) => todo.id === payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
    deleteTodo(state, { payload }) {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
