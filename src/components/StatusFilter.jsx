import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterActive } from '../features/todos/todosSlice';
import styled from 'styled-components';
import {
  statusFilterChanged,
  StatusFilters,
} from '../features/filter/filterSlice';

const StyledTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #cbcbcb;
  margin-bottom: 1rem;
`;

const StyledTabItem = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  padding: 1.25rem 2rem;
  position: relative;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;

  &::after {
    content: '';
    display: ${(props) => (props.selected ? 'block' : 'none')};
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -1px;
    background-color: #2e69e9;
    height: 3px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`;

function StatusFilter() {
  const { status } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const handleClick = () => dispatch(statusFilterChanged(value));
    const selected = value === status;

    return (
      <StyledTabItem key={value} onClick={handleClick} selected={selected}>
        {key}
      </StyledTabItem>
    );
  });

  return <StyledTabs>{renderedFilters}</StyledTabs>;
}
export default StatusFilter;
