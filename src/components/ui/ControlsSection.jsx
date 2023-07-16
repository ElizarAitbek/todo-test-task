import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../../store/reducers/todo-slice";
import { styled } from "styled-components";

export const ControlsSection = () => {
  const dispatch = useDispatch();
  const { filterStatus } = useSelector((state) => state.todos);

  const handleFilterTodos = (event) => {
    dispatch(updateFilterStatus(event.target.value));
  };

  return (
    <HeaderSection>
      <ThemeToggle />
      <h2>Todo List</h2>
      <SelectButton value={filterStatus} onChange={handleFilterTodos}>
        <option value="all">All</option>
        <option value="complete">Completed</option>
        <option value="incomplete">Incompleted</option>
      </SelectButton>
    </HeaderSection>
  );
};

const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

const SelectButton = styled.select`
  padding: 5px 8px;
  border-radius: 6px;
  font-size: 16px;
`;
