import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { todoRemoved, toggleCompleted } from './todosSlice';
import { MdDeleteOutline } from 'react-icons/md';

const StyledListItem = styled.li`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  cursor: pointer;

  input {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const StyledDetails = styled.span`
  margin-left: 0.5rem;
  flex-grow: 1;
  text-decoration: ${(props) => (props.$completed ? 'line-through' : 'none')};
`;

const StyledDeleteBtn = styled.button`
  outline: none;
  background: none;
  cursor: pointer;
  font-size: 1.5rem;
  border: none;
  display: flex;
  align-items: center;
  color: #b5b5b5;
  transition: all 0.15s ease-in-out;
  padding: 0.25rem;
  border-radius: 4px;

  &:hover {
    color: #000;
    background-color: #b5b5b5;
  }
`;

function TodoItem({ todo, isCompletedActive }) {
  const { id, details, completed } = todo;
  const dispatch = useDispatch();

  function toggleChecked() {
    dispatch(toggleCompleted({ id, completed: !completed }));
  }

  return (
    <StyledListItem>
      <input type="checkbox" checked={completed} onChange={toggleChecked} />
      <StyledDetails $completed={completed} onClick={toggleChecked}>
        {details}
      </StyledDetails>
      {isCompletedActive && (
        <StyledDeleteBtn
          onClick={() => dispatch(todoRemoved(id))}
          title="Remove"
        >
          <MdDeleteOutline />
        </StyledDeleteBtn>
      )}
    </StyledListItem>
  );
}
export default TodoItem;
