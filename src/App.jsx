import { styled } from "styled-components";
import { AppWrapper } from "./components/ui/AppWrapper";
import { ControlsSection } from "./components/ui/ControlsSection";
import { TodoForm } from "./components/todos/TodoForm";
import { TodoList } from "./components/todos/TodoList";

export function App() {
  return (
    <AppWrapper>
      <TodoWrapper>
        <ControlsSection />
        <TodoForm />
        <TodoList />
      </TodoWrapper>
    </AppWrapper>
  );
}

const TodoWrapper = styled.div`
  margin-top: 80px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
