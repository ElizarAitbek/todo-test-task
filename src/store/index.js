import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducers/todo-slice";
import themeSlice from "./reducers/theme-slice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    theme: themeSlice,
  },
});
