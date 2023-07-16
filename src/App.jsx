import { styled } from "styled-components";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "./store/reducers/todo-slice";

export function App() {
  const dispatch = useDispatch();
  const { filterStatus } = useSelector((state) => state.todos);

  const handleFilterTodos = (event) => {
    dispatch(updateFilterStatus(event.target.value));
  };
  return (
    <AppMain>
      <TodoWrapper>
        <HeaderSection>
          <h2>Todo List</h2>
          <SelectButton value={filterStatus} onChange={handleFilterTodos}>
            <option value="all">All</option>
            <option value="complete">Completed</option>
            <option value="incomplete">Incompleted</option>
          </SelectButton>
        </HeaderSection>
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

const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

const SelectButton = styled.select`
  padding: 5px 8px;
  border-radius: 6px;
  font-size: 16px;
`;
