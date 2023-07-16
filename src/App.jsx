import { styled } from "styled-components";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";

export function App() {
  return (
    <AppMain>
      <TodoWrapper>
        <h2>Todo List</h2>
        <TodoForm />
        <TodoList />
      </TodoWrapper>
    </AppMain>
  );
}

const AppMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const TodoWrapper = styled.div`
  margin-top: 80px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
