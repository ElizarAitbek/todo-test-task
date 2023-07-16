import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducers/todo-slice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});
