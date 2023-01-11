import { createSlice } from '@reduxjs/toolkit';

export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
};

const initialState = {
  status: StatusFilters.All,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    statusFilterChanged: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { statusFilterChanged } = filterSlice.actions;

export default filterSlice.reducer;
