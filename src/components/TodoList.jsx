import React from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  const { filterStatus } = useSelector((state) => state.todos);

  const sortedTodoList = [...todos];

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <>
      {filteredTodoList.length > 0 ? (
        filteredTodoList.map((todo) => <TodoItem key={todo.id} {...todo} />)
      ) : (
        <p>No todo found</p>
      )}
    </>
  );
};
