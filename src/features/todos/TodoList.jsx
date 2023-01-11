import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredTodos, clearAllCompleted } from './todosSlice';
import TodoItem from './TodoItem';
import { MdDeleteOutline } from 'react-icons/md';
import { StatusFilters } from '../filter/filterSlice';

const StyledList = styled.ul`
  margin-top: 1.25rem;
  list-style-type: none;
`;

const StyledClearAllBtn = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #ff7066;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  margin-left: auto;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: #fb655a;
  }

  span {
    margin-left: 0.25rem;
  }
`;

const StyledEmptyState = styled.div`
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  text-align: center;
`;

function TodoList() {
  const todos = useSelector(selectFilteredTodos);
  const { status } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const isCompletedActive = useSelector(
    (state) => state.filter.status === 'completed'
  );

  const handleClick = () => dispatch(clearAllCompleted());

  return (
    <StyledList>
      {todos.length === 0 && (
        <StyledEmptyState>
          No{' '}
          {Object.keys(StatusFilters).find((key) => {
            if (status === StatusFilters.All) {
              return '';
            }
            return StatusFilters[key] === status;
          })}
          {' todos '}
        </StyledEmptyState>
      )}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isCompletedActive={isCompletedActive}
        />
      ))}
      {isCompletedActive && (
        <StyledClearAllBtn onClick={handleClick}>
          <MdDeleteOutline />
          <span>remove all</span>
        </StyledClearAllBtn>
      )}
    </StyledList>
  );
}
export default TodoList;
