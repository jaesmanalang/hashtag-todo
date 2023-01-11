import { createSlice, createSelector, nanoid } from '@reduxjs/toolkit';
import { StatusFilters } from '../filter/filterSlice';

const initialState = {
  status: 'idle',
  entities: [
    {
      id: 1,
      details: 'Walk ollie outside',
      completed: false,
    },
    {
      id: 2,
      details: 'Marinate chicken for frying',
      completed: true,
    },
  ],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: {
      reducer: (state, action) => {
        state.entities.push(action.payload);
      },
      prepare: (details) => {
        return {
          payload: {
            id: nanoid(),
            details,
            completed: false,
          },
        };
      },
    },
    todoRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (todo) => todo.id !== action.payload
      );
    },

    filterActive: (state, action) => {
      state.entities = state.entities.filter(
        (todo) => todo.completed === false
      );
    },

    toggleCompleted: (state, action) => {
      const todoIndex = state.entities.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.entities[todoIndex].completed = action.payload.completed;
    },

    clearAllCompleted: (state, action) => {
      state.entities = state.entities.filter(
        (todo) => todo.completed === false
      );
    },
  },
});

export const selectTodos = (state) => state.todos.entities;

export const selectFilteredTodos = createSelector(
  selectTodos,
  (state) => state.filter,
  (todos, filter) => {
    const showAll = filter.status === StatusFilters.All;
    const showCompleted = filter.status === StatusFilters.Completed;

    if (showAll) {
      return todos;
    }

    return todos.filter((todo) => todo.completed === showCompleted);
  }
);

export const {
  todoAdded,
  todoRemoved,
  filterActive,
  toggleCompleted,
  clearAllCompleted,
} = todosSlice.actions;

export default todosSlice.reducer;
