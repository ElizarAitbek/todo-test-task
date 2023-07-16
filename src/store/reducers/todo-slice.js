import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filterStatus: "all",
};

const todoSlice = createSlice({
  name: "todo-slice",
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      console.log(payload);
      state.todos.push({
        id: Date.now(),
        status: "incomplete",
        completed: false,
        title: payload,
      });
    },
    completeTodo(state, { payload }) {
      const toggledTodo = state.todos.find((todo) => todo.id === payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }

      if (toggledTodo.completed === true) {
        toggledTodo.status = "complete";
      } else if (toggledTodo.completed === false) {
        toggledTodo.status = "incomplete";
      }

      console.log(toggledTodo.completed, toggledTodo.status);
    },
    deleteTodo(state, { payload }) {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    updateFilterStatus(state, { payload }) {
      state.filterStatus = payload;
    },
  },
});

export const { addTodo, deleteTodo, completeTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
