import { styled } from "styled-components";
import { AppWrapper } from "./components/ui/AppWrapper";
import { ControlsSection } from "./components/ui/ControlsSection";
import { TodoForm } from "./components/todos/TodoForm";
import { TodoList } from "./components/todos/TodoList";
import { AppThemeProvider } from "./components/ui/AppThemeProvider";

export function App() {
  return (
    <AppThemeProvider>
      <AppWrapper>
        <TodoWrapper>
          <ControlsSection />
          <TodoForm />
          <TodoList />
        </TodoWrapper>
      </AppWrapper>
    </AppThemeProvider>
  );
}

const TodoWrapper = styled.div`
  margin-top: 80px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
