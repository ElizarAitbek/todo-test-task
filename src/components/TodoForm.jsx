import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/reducers/todo-slice";
import { styled } from "styled-components";

export const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleTodoInputChange = (event) => {
    setNewTodoValue(event.target.value);
    setError("");
  };

  const handleSumbmitNewTodo = (event) => {
    event.preventDefault();

    if (!newTodoValue.trim()) {
      setError("Todo cannot be empty");
      return;
    }

    dispatch(addTodo(newTodoValue));

    setNewTodoValue("");
  };

  return (
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <StyledForm onSubmit={handleSumbmitNewTodo}>
        <StyledTodoInput
          value={newTodoValue || ""}
          onChange={handleTodoInputChange}
          placeholder="Add a new task"
        />
        <StyledButton type="submit">add todo</StyledButton>
      </StyledForm>
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  gap: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const StyledTodoInput = styled.input`
  width: 500px;
  padding: 11px 50px 11px 18px;
  border-radius: 6px;
  background: #e1dede;
  border: 1px solid #000;
  transition: all 0.3s;

  &:hover {
    background: #b2b0b0;
  }
`;

const StyledButton = styled.button`
  padding: 11px 18px;
  border-radius: 6px;
  background: #e1dede;
  text-align: center;
  border: 1px solid #000;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #b2b0b0;
  }
`;
