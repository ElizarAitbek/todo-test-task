import React from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../store/reducers/todo-slice";

import { styled } from "styled-components";

export const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteTodo = () => {
    dispatch(completeTodo(id));
  };
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <TodoListMain>
      <CompleteTodoButton
        type="checkbox"
        checked={completed}
        onChange={handleCompleteTodo}
      />
      <TodoTitle completed={completed}>{title}</TodoTitle>
      <DeleteTodoButton onClick={handleDeleteTodo}>&times;</DeleteTodoButton>
    </TodoListMain>
  );
};

const TodoListMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #383838;
  color: #ffffff;
  border-radius: 6px;
  padding: 10px;
`;

const CompleteTodoButton = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  border: 2px solid #555;
  outline: none;
  cursor: pointer;
`;

const DeleteTodoButton = styled.span`
  font-size: 30px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const TodoTitle = styled.p`
  font-size: 20px;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  font-style: ${({ completed }) => (completed ? "italic" : "none")};
  color: ${({ completed }) => (completed ? "#555" : "none")};
`;
