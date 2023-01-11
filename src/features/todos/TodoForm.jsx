import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { todoAdded } from './todosSlice';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const StyledInput = styled.input`
  flex: 1 1 auto;
  outline: none;
  padding: 1rem 0.5rem;
  border-radius: 6px;
  border: 1px solid #c3bdbd;
  font-size: 1.125rem;
`;

const StyledButton = styled.button`
  display: inline-block;
  flex: 0 1 auto;
  background-color: #2e69e9;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 6px;
  font-size: 1.125rem;
`;

function TodoForm() {
  const [details, setDetails] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (details === '') {
      return;
    }

    dispatch(todoAdded(details));
    setDetails('');
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        value={details}
        type="text"
        placeholder="add details"
        onChange={(e) => setDetails(e.target.value)}
      />
      <StyledButton type="submit">Add</StyledButton>
    </StyledForm>
  );
}
export default TodoForm;
